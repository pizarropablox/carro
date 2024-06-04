document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validación simple 
    if (username === 'user' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login exitoso');
        window.location.href = 'admin.html';
    } else {
        alert('Credenciales incorrectas');
    }
});