const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordConfirmInput = document.querySelector('input[name="password-confirm"]');

    if (passwordInput.value != passwordConfirmInput.value) {
        e.preventDefault();
        passwordInput.classList.add('error');
        passwordConfirmInput.classList.add('error');
        passwordInput.nextElementSibling.innerHTML = 'Passwords do not match';

        // Remove the incorrect error class once it matches
        passwordConfirmInput.addEventListener('input', function () {
            if (passwordInput.value == passwordConfirmInput.value) {
                passwordInput.classList.remove('error');
                passwordConfirmInput.classList.remove('error');
                passwordInput.nextElementSibling.innerHTML = '';
            }
        });
        return false;
    }
});