const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMsj = document.getElementById('validation-message');

const validEmail = (email) => {
    if (email.toLowerCase() === email) {
        return true;
    }
    return false;
}

email.addEventListener('change', () => {
    
    if (!validEmail(email.value)) {
        email.classList.add('invalid-input');
        errorMsj.innerText = 'Please do not use uppercase letters on your email.';
    } else {
        email.classList.remove('invalid-input');
        errorMsj.innerText = '';
    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let validSubmit = validEmail(email.value);
    
    if (validSubmit) {
        form.submit();
    }
})