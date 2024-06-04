document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    
    // Guardar nuevo nombre en el almacenamiento local 
    localStorage.setItem('username', newUsername);
    alert('Nombre de usuario actualizado');
});

document.getElementById('reset-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    
    // Guardar nueva contraseña en el almacenamiento local 
    localStorage.setItem('password', newPassword);
    alert('Contraseña actualizada');
});