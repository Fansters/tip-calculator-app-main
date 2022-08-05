
const billInput = document.getElementById("billAmount");





init = () => {
   // Clear forms here
   billInput.value = "";
}
window.onload = init;

// email verification
const validateBill = (inputText) => {
   inputText = document.form1.test1;
   // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
   console.log(inputText.value);
   if (inputText.value.match(decimal)) {
      console.log('wrong');
      // input.classList.remove('activeInput');
      // form.classList.remove('notEmail');
      // form.classList.remove('empty');
      // input.style.borderRadius = '5px';
      // document.form1.test1.focus();
      return true;
   } if (!inputText.value) {
      // input.classList.add('activeInput');
      // form.classList.remove('notEmail');
      // form.classList.add('empty');
      // input.style.borderRadius = '5px 5px 0 0';
   } else {
      // input.classList.add('activeInput');
      // form.classList.add('notEmail');
      // form.classList.remove('empty');
      // input.style.borderRadius = '5px 5px 0 0';
      document.form1.test1.focus();
   }
}

// footerBtn.addEventListener('click', validateEmail);