const button = document.querySelector('button[type="submit"]');
const password_label = document.querySelector('label[for="password"]');
const password_confirm_label = document.querySelector('label[for="password-confirm"]');

button.addEventListener('click', function(e) {
    e.preventDefault();
    const password = document.querySelector('input[name="password"]').value;
    const password_confirm = document.querySelector('input[name="password-confirm"]').value;
    if (password !== password_confirm) {
        password_label.classList.add('error-text');
        password_confirm_label.classList.add('error-text');
    } else {
        password_label.classList.remove('error-text');
        password_confirm_label.classList.remove('error-text');
        button.submit();
    }
});