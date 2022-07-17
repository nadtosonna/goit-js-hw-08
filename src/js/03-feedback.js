import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input[type=email]'),
}
const input = refs.form.elements;
const FORM_STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(FORM_STORAGE_KEY);
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

if (savedData != null) {
    const formData = JSON.parse(savedData);
    refs.email.value = formData.email;
    refs.textarea.value = formData.message;
}

function onInput(event) {
    formData.email = input.email.value;
    formData.message = input.message.value;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
    event.preventDefault();
    formData.email = input.email.value;
    formData.message = input.message.value;
    if (input.email.value === '' || input.message.value === '') {
        alert('EMAIL and MESSAGE field can not be empty! Please fill in BOTH fields.');
    } else {
    console.log(formData);
    refs.form.reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
    }
}

