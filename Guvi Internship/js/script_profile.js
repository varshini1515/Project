function updateProfile() {
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;

    // Regular expression to match 10-digit phone number
    const phoneRegex = /^\d{10}$/;

    if (!age || !dob || !contact) {
        alert("Please fill all the details.");
    } else if (!phoneRegex.test(contact)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else {
        alert("Profile updated successfully!");
    }
}

function logout() {
    document.getElementById('age').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('contact').value = '';
    alert("Logged out successfully!");
    window.location.href = 'index.html'; // Redirect to index page
}
