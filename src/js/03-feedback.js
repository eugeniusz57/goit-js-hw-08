import throttle from 'lodash.throttle';
// import { refs } from './03refs'
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
    if(refs.inputEmail.value === "" || refs.textArea.value === "" ){
        alert("Enter all fields ");
        return
    }


localStorage.removeItem(MESSAGE_KEY);

e.currentTarget.reset();
}

function getMessage(){
    const ifKey = localStorage.getItem(MESSAGE_KEY)
    if(!ifKey){
        return
    }
    const data = JSON.parse(ifKey);
    data.message ? refs.textArea.value = data.message : refs.textArea.value = "";
    data.email ? refs.inputEmail.value = data.email : refs.inputEmail.value = "";
}