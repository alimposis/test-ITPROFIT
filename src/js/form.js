import { loadDoc } from "./ajax"

export const validationForm =(userName,tel,mail,textarea,t,responseState,evt)=>{
  const nameValue = userName.value
  const telValue = tel.value
  const mailValue = mail.value
  const textareaValue = textarea.value
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const testMail = EMAIL_REGEXP.test(mailValue)
  let formState = true
  if(!nameValue){
    userName.className = userName.className = " error-input"
    const textError = document.querySelector(".validation-userName")
    textError.textContent = 'Ведите свое имя'
    textError.className = textError.className + ' error'
    formState = false
  }
  if(!telValue){
    tel.className = userName.className = " error-input"
    const textError = document.querySelector('.validation-phone')
    textError.textContent = 'Введите свой номер телефона'
    textError.className = textError.className + ' error'
    formState = false
  }
  if(!mailValue && !testMail){
    mail.className = userName.className = " error-input"
    const textError = document.querySelector('.validation-email')
    textError.textContent = 'Введите свою почту'
    textError.className = textError.className + ' error'
    formState = false
  }
  if(!textareaValue){
    textarea.className = userName.className = " error-input"
    const textError = document.querySelector('.validation-textarea')
    textError.textContent = 'Введите сообщение'
    textError.className = textError.className + ' error'
    formState = false
  }
  if (formState) {
    loadDoc(t,responseState)
    evt.target.reset();
  }
}