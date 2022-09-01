import throttle from 'lodash.throttle';

const refs ={
    inputEmail: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
    submitBtn: document.querySelector("button"),
    form: document.querySelector(".feedback-form"),
};

const MESSAGE_KEY = "feedback-form-state";
const  formData = {};

refs.form.addEventListener('submit', onSubmit)
refs.form.addEventListener('input',  throttle(onInputObject, 500))

getMessage();

function onInputObject(e){
    formData[e.target.name] = e.target.value;

    const message = JSON.stringify(formData);
    
    localStorage.setItem(MESSAGE_KEY, message );
}

function onSubmit(e){
e.preventDefault();

localStorage.removeItem(MESSAGE_KEY);

e.currentTarget.reset();
}

function getMessage(){
    const ifKey = localStorage.getItem(MESSAGE_KEY)
    if(ifKey){
        const data = JSON.parse(ifKey);

        refs.textArea.value = data.message;
        refs.inputEmail.value = data.email;
    }
}