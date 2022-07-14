import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input[type=email]'),
}
const FORM_STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(FORM_STORAGE_KEY);
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

if (savedData) {
    const formData = JSON.parse(savedData);
    console.log(formData);
    refs.email.value = formData.email;
    refs.textarea.value = formData.message;
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    refs.form.reset();
    localStorage.removeItem(FORM_STORAGE_KEY);
}
function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}
