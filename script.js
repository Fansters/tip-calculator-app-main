const billInput = document.getElementById("billAmount");
const billForm = document.querySelector(".billF");
const billInputClass = document.querySelector(".inputForBill");
const customInput = document.getElementById("customAmount");
const customPercForm = document.querySelector(".tipC");
const customPercClass = document.querySelector(".customBtn");
const peopleCountInput = document.getElementById("nrOfPpl");
const peopleCountForm = document.querySelector(".nrP");
const peopleCountClass = document.querySelector(".peopleClass");
const resetBtn = document.querySelector(".resetBtn");
const forms = document.getElementsByTagName("form");
const perPersonTipSum = document.querySelector(".perPersonTipSum");
const perPersonTip = document.querySelector(".perPersonTip");
const btnCont = document.getElementById('formID')
const numberButtons = document.querySelectorAll('[data-number]');

let current = document.getElementsByClassName("active");
let tipPerc = Number(customInput.value);
let btnNumber;

// clearing inputs onload
init = () => {
   (billInput.value = ""), (customInput.value = ""), (peopleCountInput.value = "");
};
window.onload = init;

// changing active class
const buttonEl = btnCont.getElementsByClassName('button');
for (let i = 0; i < buttonEl.length; i++) {
   buttonEl[i].addEventListener("click", function () {
      customInput.value = '';
      // If there's no active class
      if (current.length > 0) {
         current[0].className = current[0].className.replace(" active", "");
      }
      // Adding the active class to the current/clicked button
      this.className += " active";
   });
}

// Whole onchange Functions
function someFnc() {
   let tipOne, tipAll;
   let bill = Number(billInput.value);
   tipPerc = Number(customInput.value);
   let numOfPpl = Number(peopleCountInput.value);
   perPersonTip.textContent = '0.00';
   perPersonTipSum.textContent = '0.00';

   // bill !empty and num verification
   const validateBill = (inputText) => {
      inputText = document.form1.test1;
      const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
      const numbers = /^[0-9]+$/;

      if (inputText.value.length == 0 || inputText.value == 0) {
         billForm.classList.remove("billFormNumbers");
         billForm.classList.add("billFormEmpty");
         billInputClass.style.outline = "2px solid brown";
         return false;
      }

      if (inputText.value.match(numbers) || inputText.value.match(decimal)) {
         billForm.classList.remove("billFormNumbersNot");
         billForm.classList.remove("billFormNumbers");
         billForm.classList.remove("billFormEmpty");
         billInputClass.style.removeProperty("outline");
         billInput.value = bill.toFixed(2);

         if (isNaN(tipPerc) || isNaN(numOfPpl)) {
            return false
         } else {
            if (inputText.value > 0 && tipPerc > 0 && numOfPpl > 0) {
               tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
               tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
               perPersonTip.textContent = tipOne;
               perPersonTipSum.textContent = tipAll;
            } else {
               perPersonTip.textContent = '0.00';
               perPersonTipSum.textContent = '0.00';
            }
         }
         return true;
      } else {
         billForm.classList.add("billFormNumbers");
         billForm.classList.add("billFormEmpty");
         billInputClass.style.outline = "2px solid brown";
      }
   };

   // custom percentage validation
   const validatePercentage = (inputText) => {
      inputText = document.form2.test2;
      const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
      const numbers = /^[0-9]+$/;
      if (document.querySelector('.active') !== null) {
         document.querySelector('.active').classList.remove('active');
      }
      if (inputText.value.length == 0 || inputText.value.match(numbers) || inputText.value.match(decimal)) {
         customPercForm.classList.remove("tipCustom");
         customPercClass.style.removeProperty("outline");
         if (isNaN(bill) || isNaN(numOfPpl) || inputText.value.length == 0) {
            return false
         } else {
            if (inputText.value > 0 && numOfPpl > 0) {
               if (document.querySelector('.active') !== null) {
                  document.querySelector('.active').classList.remove('active');
               }
               tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
               tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
               perPersonTip.textContent = tipOne;
               perPersonTipSum.textContent = tipAll;
            } else {
               perPersonTip.textContent = '0.00';
               perPersonTipSum.textContent = '0.00';
            }
         }
         return true;
      } else {
         customPercForm.classList.add("tipCustom");
         customPercClass.style.outline = "2px solid brown";
      }
   };

   // num of peeps validation
   const validatePeople = (inputText) => {
      inputText = document.form3.test3;
      const numbers = /^[0-9]+$/;
      if (inputText.value.length == 0 || inputText.value == 0 || inputText.value === 0) {
         peopleCountForm.classList.remove("billFormNumbers");
         peopleCountForm.classList.add("billFormEmpty");
         peopleCountClass.style.outline = "2px solid brown";
         document.form1.test1.focus();
         return false;
      }
      if (inputText.value.match(numbers)) {
         peopleCountForm.classList.remove("billFormNumbers");
         peopleCountForm.classList.remove("billFormEmpty");
         peopleCountClass.style.removeProperty("outline");
         if (isNaN(bill) || isNaN(tipPerc)) {
            return false
         } else {
            if (inputText.value > 0 && bill > 0) {
               tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
               tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
               perPersonTip.textContent = tipOne;
               perPersonTipSum.textContent = tipAll;
            } else {
               perPersonTip.textContent = '0.00';
               perPersonTipSum.textContent = '0.00';
            }
         }
         return true;
      } else {
         peopleCountForm.classList.add("billFormNumbers");
         peopleCountForm.classList.add("billFormEmpty");
         peopleCountClass.style.outline = "2px solid brown";
      }
   };

   // custom percentage btn 
   numberButtons.forEach(b => {
      b.addEventListener('click', () => {
         btnNumber = b.innerText;
         btnNumber = btnNumber.substring(0, btnNumber.length - 1);
         if (bill > 0 && numOfPpl > 0) {
            tipOne = ((bill * Number(btnNumber)) / 100 / numOfPpl).toFixed(2)
            tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
            perPersonTip.textContent = tipOne;
            perPersonTipSum.textContent = tipAll;
         } else {
            perPersonTip.textContent = '0.00';
            perPersonTipSum.textContent = '0.00';
         }
      })
   })

   // Resset btn 
   resetBtn.addEventListener("click", () => {
      (billInput.value = ""), (customInput.value = ""), (peopleCountInput.value = "");
      billForm.classList.remove("billFormNumbers");
      billForm.classList.remove("billFormEmpty");
      billInputClass.style.removeProperty("outline");
      customPercForm.classList.remove("tipCustom");
      customPercClass.style.removeProperty("outline");
      peopleCountForm.classList.remove("billFormNumbers");
      peopleCountForm.classList.remove("billFormEmpty");
      peopleCountClass.style.removeProperty("outline");
      bill = 0, numOfPpl = 0, tipPerc = 0;
      perPersonTip.textContent = '0.00';
      perPersonTipSum.textContent = '0.00';
      if (document.querySelector('.active') !== null) {
         document.querySelector('.active').classList.remove('active');
      }
   });
   return validateBill(), validatePercentage(), validatePeople();
}