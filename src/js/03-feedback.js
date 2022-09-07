import throttle from 'lodash.throttle';
import { refs } from './03refs'


const MESSAGE_KEY = "feedback-form-state";
let  formData = {};

refs.form.addEventListener('input',  throttle(onInputObject, 500))
refs.form.addEventListener('submit', onSubmit)


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
    } 

    e.currentTarget.reset();

    localStorage.removeItem(MESSAGE_KEY);
    getMessage();
}

function getMessage(){

    const isLocalStorage = JSON.parse(localStorage.getItem(MESSAGE_KEY));

    if(isLocalStorage){
        refs.textArea.value = isLocalStorage.message || "";
        refs.inputEmail.value = isLocalStorage.email || "";
        formData = isLocalStorage;
        return
    } formData = {};
    
}