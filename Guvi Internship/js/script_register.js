document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch existing users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Add the new user
    registeredUsers.push({ username, password });

    // Store the updated users in localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    alert('Registration successful!');
    window.location.href = 'login.html';
});
