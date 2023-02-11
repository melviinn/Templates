// Select the input password and the eye icon
const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute (password -> hide, text -> show)
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});



