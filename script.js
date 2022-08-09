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
const forms = document.getElementsByTagName('form');
const perPersonTipSum = document.querySelector('.perPersonTipSum');
const perPersonTip = document.querySelector('.perPersonTip');

billInput.addEventListener('change', calculateTip);

function calculateTip() {
   let bill = parseFloat(billInput.value);
   let tipPerc = parseInt(customInput.value);
   let numOfPpl = parseInt(peopleCountInput.value);
   console.log(typeof bill, typeof tipPerc, typeof numOfPpl);

   billInput.value = bill.toFixed(2);
   // customInput.value = tipPerc; 
   perPersonTip.textContent = (bill * tipPerc) / 100;
   perPersonTipSum.textContent = parseInt(perPersonTip.textContent) + bill;

}


init = () => {
   billInput.value = '', customInput.value = '', peopleCountInput.value = "";
}
window.onload = init;

// bill !empty and num verification
const validateBill = (inputText) => {
   inputText = document.form1.test1;
   const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
   const numbers = /^[0-9]+$/;
   // console.log(inputText.value);
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
   // console.log(inputText.value);
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
// console.log(perPersonTip.value);

// forms.submit((e) => {
//    e.preventDefault();
// });


// const init = function () {
      //    scores = [0, 0];
      //    currentScore = 0;
      //    activePlayer = 0;
      //    playing = true;
       
      //    score0El.textContent = 0;
      //    score1El.textContent = 0;
      //    current0El.textContent = 0;
      //    current1El.textContent = 0;
       
      //    diceEl.classList.add('hidden');
      //    player0El.classList.remove('player--winner');
      //    player1El.classList.remove('player--winner');
      //    player0El.classList.add('player--active');
      //    player1El.classList.remove('player--active');
      //  };