// We get the input password and the eye icon
const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

window.onload=function() {
    // We call the function when clicked
    togglePassword.addEventListener('click', function () {
        // If the input is of type password (*****)
        if (password.getAttribute('type') == 'password') {
            // We set the type to text (abcdef)
            password.setAttribute('type', 'text');
            // We change the logo (fa-eye-slash when hide) to fa-eye when visible
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        } else {
            password.setAttribute('type', 'password');
        }
    });
}

