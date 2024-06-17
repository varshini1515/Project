document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Assuming you have stored registered users in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'profile.html';
    } else {
        alert('Invalid username or password!');
    }
});
