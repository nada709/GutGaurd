-- Create the database
CREATE DATABASE IF NOT EXISTS ibs_medical_chatbot;
USE ibs_medical_chatbot;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other', 'Prefer not to say'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    role ENUM('patient', 'doctor', 'admin') DEFAULT 'patient',
    profile_picture VARCHAR(255) DEFAULT NULL,
    last_activity TIMESTAMP NULL
);

-- Password reset tokens
CREATE TABLE IF NOT EXISTS password_reset_tokens (
    token_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(64) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- User sessions
CREATE TABLE IF NOT EXISTS user_sessions (
    session_id VARCHAR(128) PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- User preferences
CREATE TABLE IF NOT EXISTS user_preferences (
    preference_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    theme VARCHAR(20) DEFAULT 'light',
    font_size VARCHAR(20) DEFAULT 'medium',
    notification_enabled BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- User medical profiles
CREATE TABLE IF NOT EXISTS user_medical_profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    blood_type VARCHAR(10),
    known_allergies TEXT,
    chronic_conditions TEXT,
    current_medications TEXT,
    height_cm INT,
    weight_kg DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Stored procedures for authentication
DELIMITER //

-- User registration
CREATE PROCEDURE IF NOT EXISTS register_user(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password VARCHAR(255),
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_dob DATE,
    IN p_gender ENUM('Male', 'Female', 'Other', 'Prefer not to say')
)
BEGIN
    DECLARE hashed_password VARCHAR(255);
    -- In a real application, you would use proper password hashing like bcrypt
    -- This is just a placeholder for demonstration
    SET hashed_password = SHA2(CONCAT(p_password, 'salt'), 256);
    
    INSERT INTO users (username, email, password_hash, first_name, last_name, date_of_birth, gender)
    VALUES (p_username, p_email, hashed_password, p_first_name, p_last_name, p_dob, p_gender);
    
    -- Create default preferences for the new user
    INSERT INTO user_preferences (user_id) VALUES (LAST_INSERT_ID());
END //

-- User login
CREATE PROCEDURE IF NOT EXISTS authenticate_user(
    IN p_username VARCHAR(50),
    IN p_password VARCHAR(255),
    OUT p_user_id INT,
    OUT p_role VARCHAR(20),
    OUT p_success BOOLEAN
)
BEGIN
    DECLARE stored_hash VARCHAR(255);
    
    SELECT user_id, password_hash, role INTO p_user_id, stored_hash, p_role
    FROM users
    WHERE username = p_username OR email = p_username;
    
    -- Compare hashed passwords (in real app, use proper password verification)
    IF stored_hash IS NOT NULL AND stored_hash = SHA2(CONCAT(p_password, 'salt'), 256) THEN
        SET p_success = TRUE;
        
        -- Update last login
        UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = p_user_id;
    ELSE
        SET p_success = FALSE;
        SET p_user_id = NULL;
        SET p_role = NULL;
    END IF;
END //

-- Password reset
CREATE PROCEDURE IF NOT EXISTS create_password_reset_token(
    IN p_email VARCHAR(100),
    IN p_token VARCHAR(64),
    IN p_expiry_hours INT
)
BEGIN
    DECLARE v_user_id INT;
    
    SELECT user_id INTO v_user_id FROM users WHERE email = p_email;
    
    IF v_user_id IS NOT NULL THEN
        INSERT INTO password_reset_tokens (user_id, token, expires_at)
        VALUES (v_user_id, p_token, DATE_ADD(NOW(), INTERVAL p_expiry_hours HOUR));
    END IF;
END //

-- Verify password reset token
CREATE PROCEDURE IF NOT EXISTS verify_password_reset_token(
    IN p_token VARCHAR(64),
    OUT p_user_id INT,
    OUT p_valid BOOLEAN
)
BEGIN
    DECLARE v_expires_at TIMESTAMP;
    DECLARE v_used BOOLEAN;
    
    SELECT user_id, expires_at, used INTO p_user_id, v_expires_at, v_used
    FROM password_reset_tokens
    WHERE token = p_token;
    
    IF p_user_id IS NOT NULL AND v_expires_at > NOW() AND v_used = FALSE THEN
        SET p_valid = TRUE;
    ELSE
        SET p_valid = FALSE;
        SET p_user_id = NULL;
    END IF;
END //

-- Update user password
CREATE PROCEDURE IF NOT EXISTS update_user_password(
    IN p_user_id INT,
    IN p_new_password VARCHAR(255)
)
BEGIN
    DECLARE hashed_password VARCHAR(255);
    SET hashed_password = SHA2(CONCAT(p_new_password, 'salt'), 256);
    
    UPDATE users SET password_hash = hashed_password WHERE user_id = p_user_id;
    
    -- Mark all reset tokens for this user as used
    UPDATE password_reset_tokens SET used = TRUE WHERE user_id = p_user_id;
END //

DELIMITER ;

-- Create an admin user for testing (password: Admin@123)
INSERT INTO users (username, email, password_hash, first_name, last_name, role, is_verified)
VALUES (
    'admin',
    'admin@ibsmedical.com',
    SHA2(CONCAT('Admin@123', 'salt'), 256),
    'System',
    'Admin',
    'admin',
    TRUE
);

-- Create a test patient (password: Patient@123)
INSERT INTO users (username, email, password_hash, first_name, last_name, date_of_birth, gender, is_verified)
VALUES (
    'patient1',
    'patient@ibsmedical.com',
    SHA2(CONCAT('Patient@123', 'salt'), 256),
    'John',
    'Doe',
    '1990-05-15',
    'Male',
    TRUE
);

-- Create preferences for test users
INSERT INTO user_preferences (user_id) VALUES (1), (2);

-- Create medical profile for test patient
INSERT INTO user_medical_profiles (user_id, blood_type, known_allergies, height_cm, weight_kg)
VALUES (
    2,
    'O+',
    'Penicillin',
    175,
    70.5
);