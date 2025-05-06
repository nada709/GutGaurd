document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        "username", "email", "first_name", "last_name", "date_of_birth", "gender",
        "blood_type", "known_allergies", "chronic_conditions", "current_medications",
        "height_cm", "weight_kg"
    ];

    // قراءة بيانات المستخدم من localStorage
    let userData = JSON.parse(localStorage.getItem("gutguard_profile")) || {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
        blood_type: "",
        known_allergies: "",
        chronic_conditions: "",
        current_medications: "",
        height_cm: "",
        weight_kg: "",
        profile_picture: "https://randomuser.me/api/portraits/men/32.jpg"
    };

    function fillProfileFields(data) {
        fields.forEach(key => {
            const input = document.getElementById(key);
            if (input) input.value = data[key] || "";
        });

        const img = document.getElementById("profileImage");
        if (img && data.profile_picture) {
            img.src = data.profile_picture;
        }
    }

    function getProfileFields() {
        const data = {};
        fields.forEach(key => {
            const input = document.getElementById(key);
            if (input) data[key] = input.value;
        });
        data.profile_picture = document.getElementById("profileImage").src;
        return data;
    }

    function toggleEditMode() {
        const inputs = document.querySelectorAll("input:not(#imageUpload)");
        const isDisabled = inputs[0].disabled;
        inputs.forEach(input => input.disabled = !isDisabled);

        const editBtn = document.getElementById("editBtn");
        editBtn.textContent = isDisabled ? "Save" : "Edit";

        if (!isDisabled) {
            const updatedData = getProfileFields();
            localStorage.setItem("gutguard_profile", JSON.stringify(updatedData));
            userData = updatedData;
            alert("Profile saved successfully!");
        }
    }

    function resetProfile() {
        if (confirm("Are you sure you want to reset your profile to default?")) {
            localStorage.removeItem("gutguard_profile");
            userData = {
                username: "",
                email: "",
                first_name: "",
                last_name: "",
                date_of_birth: "",
                gender: "",
                blood_type: "",
                known_allergies: "",
                chronic_conditions: "",
                current_medications: "",
                height_cm: "",
                weight_kg: "",
                profile_picture: "https://randomuser.me/api/portraits/men/32.jpg"
            };
            fillProfileFields(userData);
            document.querySelectorAll("input:not(#imageUpload)").forEach(input => input.disabled = true);
            document.getElementById("editBtn").textContent = "Edit";
            alert("Profile reset to default.");
        }
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById("profileImage");
                img.src = e.target.result;
                userData.profile_picture = e.target.result;

                if (!document.getElementById("username").disabled) {
                    localStorage.setItem("gutguard_profile", JSON.stringify(userData));
                }
            };
            reader.readAsDataURL(file);
        }
    }

    // Initialize the profile
    fillProfileFields(userData);

    // Set up event listeners
    document.getElementById("editBtn").addEventListener("click", toggleEditMode);
    document.getElementById("resetBtn").addEventListener("click", resetProfile);
    document.getElementById("imageUpload").addEventListener("change", handleImageUpload);
    document.getElementById("uploadBtn").addEventListener("click", function () {
        document.getElementById("imageUpload").click();
    });

    // Disable all inputs initially (except image upload)
    document.querySelectorAll("input:not(#imageUpload)").forEach(input => input.disabled = true);
});