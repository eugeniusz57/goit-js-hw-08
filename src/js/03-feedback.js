import throttle from 'lodash.throttle';
import { refs } from './03refs'


const MESSAGE_KEY = "feedback-form-state";
let  formData = {};

refs.form.addEventListener('submit', onSubmit)
refs.form.addEventListener('input',  throttle(onInputObject, 500))



function onInputObject(e){
    formData[e.target.name] = e.target.value;
    console.log(formData);

    const message = JSON.stringify(formData);
        
    localStorage.setItem(MESSAGE_KEY, message );

}
getMessage();

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

    const isLocalStorage = JSON.parse(localStorage.getItem(MESSAGE_KEY));
    console.log(isLocalStorage);
    if(isLocalStorage){
        refs.textArea.value = isLocalStorage.message || '';
        refs.inputEmail.value = isLocalStorage.email || '';
        formData = isLocalStorage;
    }
    
}