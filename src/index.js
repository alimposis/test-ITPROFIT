import Inputmask from 'inputmask';

import './sass/main.scss'
import { validationForm } from './js/form';



const form = document.getElementById("myForm")
const userNameInput = document.querySelector('.input-user-name')
const phoneInput = document.querySelector(".input-phone");
const mailInput = document.querySelector(".input-email")
const textarea = document.querySelector(".input-textarea")
const responseState = document.querySelector(".response-state")
let im = new Inputmask('+375(99)999-99-99')
im.mask(phoneInput)


form.addEventListener('submit',function(evt){
  evt.preventDefault();
  validationForm(userNameInput,phoneInput,mailInput,textarea,this,responseState,evt)
})
const openModal = document.querySelector(".open_modal")
const modal = document.querySelector(".modal")
const body = document.querySelector("body")
const background = document.querySelector(".background")
const modalClose = document.querySelector(".modal_close")

openModal.addEventListener("click",()=>{
  modal.classList.remove("display-none")
  background.classList.remove("display-none")
  body.className = "OverH"
})

function closeModal () {
  modal.className = modal.className + " display-none"
  background.className = background.className + " display-none"
  body.classList.remove("OverH")
}

background.addEventListener("click",()=>{
  closeModal ()
})
modalClose.addEventListener("click",()=>{
  closeModal ()
})

