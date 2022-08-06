const billInput = document.getElementById("billAmount");
const billForm = document.querySelector('.billF');
const billInputClass = document.querySelector('.inputForBill');
const customInput = document.getElementById('customAmount');
const customPercForm = document.querySelector('.tipC');
const customPercClass = document.querySelector('.customBtn');
const peopleCountInput = document.getElementById('nrOfPpl');
const peopleCountForm = document.querySelector('.nrP');
const peopleCountClass = document.querySelector('.peopleClass');
const resetBtn = document.querySelector('.resetBtn');




init = () => {
   billInput.value = '', customInput.value = '', peopleCountInput.value = "";
}
window.onload = init;

// bill !empty and num verification
const validateBill = (inputText) => {
   inputText = document.form1.test1;
   const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
   const numbers = /^[0-9]+$/;
   console.log(inputText.value);
   if (inputText.value.length == 0) {
      billForm.classList.remove('billFormNumbers')
      billForm.classList.add('billFormEmpty')
      billInputClass.style.outline = '2px solid brown'
      document.form1.test1.focus();
      return false;
   } if (inputText.value.match(numbers) || inputText.value.match(decimal)) {
      billForm.classList.remove('billFormNumbers')
      billForm.classList.remove('billFormEmpty')
      billInputClass.style.removeProperty('outline');
      return true
   } else {
      billForm.classList.add('billFormNumbers')
      billForm.classList.add('billFormEmpty')
      billInputClass.style.outline = '2px solid brown'
   }
}

// custom %  num verification
const validatePercentage = (inputText) => {
   inputText = document.form2.test2;
   const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
   const numbers = /^[0-9]+$/;
   console.log(inputText.value);
   if (inputText.value.length == 0 || inputText.value.match(numbers) || inputText.value.match(decimal)) {
      customPercForm.classList.remove('tipCustom')
      customPercClass.style.removeProperty('outline');
      return true
   } else {
      customPercForm.classList.add('tipCustom')
      customPercClass.style.outline = '2px solid brown'
   }
}

// people amount !empty and num verification
const validatePeople = (inputText) => {
   inputText = document.form3.test3;
   const numbers = /^[0-9]+$/;
   console.log(inputText.value);
   if (inputText.value.length == 0) {
      peopleCountForm.classList.remove('billFormNumbers')
      peopleCountForm.classList.add('billFormEmpty')
      peopleCountClass.style.outline = '2px solid brown'
      document.form1.test1.focus();
      return false;
   } if (inputText.value.match(numbers)) {
      peopleCountForm.classList.remove('billFormNumbers')
      peopleCountForm.classList.remove('billFormEmpty')
      peopleCountClass.style.removeProperty('outline');
      return true
   } else {
      peopleCountForm.classList.add('billFormNumbers')
      peopleCountForm.classList.add('billFormEmpty')
      peopleCountClass.style.outline = '2px solid brown'
   }
}

resetBtn.addEventListener('click', () => {
   billInput.value = '', customInput.value = '', peopleCountInput.value = "";
   billForm.classList.remove('billFormNumbers');
   billForm.classList.remove('billFormEmpty');
   billInputClass.style.removeProperty('outline');
   customPercForm.classList.remove('tipCustom')
   customPercClass.style.removeProperty('outline');
   peopleCountForm.classList.remove('billFormNumbers')
   peopleCountForm.classList.remove('billFormEmpty')
   peopleCountClass.style.removeProperty('outline');
})