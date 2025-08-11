// Toggle between forms
document.getElementById('switchToRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
});

document.getElementById('switchToLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
});

// For password visbility toggle
document.getElementById('toggleLoginPassword').addEventListener('click', function(e) {
    togglePasswordVisibility('loginPassword', this);
});

document.getElementById('toggleRegisterPassword').addEventListener('click', function(e) {
    togglePasswordVisibility('registerPassword', this);
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function(e) {
    togglePasswordVisibility('registerConfirmPassword', this);
});

function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}



// Form submissions
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Login submitted');
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Registration submitted');
});