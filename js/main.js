const btnSuscribe = document.getElementById('btn-suscribe');
const signUpSection = document.getElementById('sign-up-section');
const successMsgSection = document.getElementById('success-msg-section');
const inputEmail = document.getElementById('input-email');
const emailErrorMsg = document.getElementById('email-error-msg');

let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

btnSuscribe.addEventListener('click', (e) => {
  e.preventDefault();
  if (mailRegex.test(inputEmail.value)) {
    signUpSection.classList.toggle('hidden');
    signUpSection.classList.toggle('flex');
    successMsgSection.classList.toggle('hidden');
    successMsgSection.classList.toggle('flex');

  } else {
    inputEmail.classList.add('input-error');
    emailErrorMsg.classList.remove('hidden');
  }
})