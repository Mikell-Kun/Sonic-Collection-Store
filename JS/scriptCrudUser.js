const dUsers = [
    { iduser: 1, username: 'admin', password: '123', role:'admin'},
    { iduser: 2, username: 'cliente1', password: '123', role:'customer'},
    { iduser: 3, username: 'cliente2', password: '123', role:'customer'},
    { iduser: 4, username: 'cliente3', password: '123', role:'customer'},
    { iduser: 5, username: 'cliente4', password: '123', role:'customer'},
    { iduser: 6, username: 'cliente5', password: '123', role:'customer'},
    { iduser: 7, username: 'cliente6', password: '123', role:'customer'},
    { iduser: 8, username: 'cliente7', password: '123', role:'customer'},
    { iduser: 9, username: 'cliente8', password: '123', role:'customer'},
    { iduser: 10, username: 'cliente9', password: '123', role:'customer'},
    { iduser: 11, username: 'cliente10', password: '123', role:'customer'},
    { iduser: 12, username: 'cliente11', password: '123', role:'customer'},
    { iduser: 13, username: 'cliente12', password: '123', role:'customer'},
    { iduser: 14, username: 'cliente13', password: '123', role:'customer'},
    { iduser: 15, username: 'cliente14', password: '123', role:'customer'},
    { iduser: 16, username: 'cliente15', password: '123', role:'customer'},
    { iduser: 17, username: 'cliente16', password: '123', role:'customer'},
    { iduser: 18, username: 'cliente17', password: '123', role:'customer'},
    { iduser: 19, username: 'cliente18', password: '123', role:'customer'},
    { iduser: 20, username: 'cliente19', password: '123', role:'customer'},
    { iduser: 21, username: 'cliente20', password: '123', role:'customer'},
    { iduser: 22, username: 'cliente21', password: '123', role:'customer'},
    { iduser: 23, username: 'cliente22', password: '123', role:'customer'},
    { iduser: 24, username: 'cliente23', password: '123', role:'customer'},
    { iduser: 25, username: 'cliente24', password: '123', role:'customer'},
    { iduser: 26, username: 'cliente25', password: '123', role:'customer'},
];

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || dUsers;
}

function renderUsers() {
    var usersTable = document.getElementById('userTable');
    var users = getUsers();
    
    usersTable.innerHTML = ''; 

    users.forEach(function (user) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.iduser}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.role}</td>
            <td>
                <button class = "button button--secondary" onclick="editUser(${user.iduser})">Edit</button>
                <button class = "button button--terciary" onclick="deleteUser(${user.iduser})">Delete</button>
            </td>
        `;
        usersTable.appendChild(row);
    });
}

function addUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    var users = getUsers();

    var id = users.length > 0 ? Math.max(...users.map(user => user.iduser)) + 1 : 1;

    var user = {
        iduser: id,
        username: username,
        password: password,
        role: role
    };

    users.push(user);

    saveUsers(users);

    renderUsers();

    document.getElementById('userForm').reset();
}

function deleteUser(id) {
    var users = getUsers();
    var updatedUsers = users.filter(function(user) {
        return user.iduser !== id;
    });
    saveUsers(updatedUsers);
    renderUsers();
}

function editUser(id) {
    var users = getUsers();
    var user = users.find(function(user) {
        return user.iduser === id;
    });

    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
    document.getElementById('role').value = user.role;

    deleteUser(id);
}

renderUsers();