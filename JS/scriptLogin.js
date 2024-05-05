 // Function to retrieve users array from localStorage or use default users
 function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Function to handle user login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = getUsers();
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert("Login successful! Welcome, " + user.username + "!");

        if (user.role === 'admin') {
            window.location.href = 'shopAdmin.html'; // Redirect to admin page
        } else if (user.role === 'customer') {
            window.location.href = 'shopUser.html'; // Redirect to customer page
        } else {
            alert("Unknown role. Please contact the administrator.");
        }
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}