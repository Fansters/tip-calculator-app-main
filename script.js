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



init = () => {
   (billInput.value = ""), (customInput.value = ""), (peopleCountInput.value = "");
};
window.onload = init;

function someFnc() {
   let clickedBtn;
   // bill !empty and num verification
   console.log('new func');
   let tipOne, tipAll;
   let bill = parseFloat(billInput.value);
   let tipPerc = parseInt(customInput.value);
   let numOfPpl = parseInt(peopleCountInput.value);

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
         console.log(bill, tipPerc, numOfPpl);
         billInput.value = bill.toFixed(2);
         console.log(tipPerc, numOfPpl);
         if (isNaN(tipPerc) || isNaN(numOfPpl)) {
            console.log('false');
            return false
         } else {
            console.log('true');
            tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
            tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
            perPersonTip.textContent = tipOne;
            perPersonTipSum.textContent = tipAll;
         }
         return true;
      } else {
         billForm.classList.add("billFormNumbers");
         billForm.classList.add("billFormEmpty");
         billInputClass.style.outline = "2px solid brown";
         console.log('else false');
         inputText.value = '0'
      }
   };
   const validatePercentage = (inputText) => {
      inputText = document.form2.test2;
      const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
      const numbers = /^[0-9]+$/;
      if (inputText.value.length == 0 || inputText.value.match(numbers) || inputText.value.match(decimal)) {
         customPercForm.classList.remove("tipCustom");
         customPercClass.style.removeProperty("outline");
         if (isNaN(bill) || isNaN(numOfPpl) || inputText.value.length == 0) {
            console.log('false');
            return false
         } else {
            console.log('true', bill);
            tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
            tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
            perPersonTip.textContent = tipOne;
            perPersonTipSum.textContent = tipAll;
         }
         return true;
      } else {
         customPercForm.classList.add("tipCustom");
         customPercClass.style.outline = "2px solid brown";
         // bill.value = 0;
      }
   };

   const validatePeople = (inputText) => {
      inputText = document.form3.test3;
      const numbers = /^[0-9]+$/;
      if (inputText.value.length == 0 || inputText.value == 0) {
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
            console.log('false');
            return false
         } else {
            console.log('true');
            tipOne = ((bill * tipPerc) / 100 / numOfPpl).toFixed(2)
            tipAll = ((Number(tipOne * numOfPpl) + bill) / numOfPpl).toFixed(2)
            perPersonTip.textContent = tipOne;
            perPersonTipSum.textContent = tipAll;
         }
         return true;
      } else {
         peopleCountForm.classList.add("billFormNumbers");
         peopleCountForm.classList.add("billFormEmpty");
         peopleCountClass.style.outline = "2px solid brown";
      }
   };

   return validateBill(), validatePercentage(), validatePeople();
}

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
   perPersonTip.textContent = '0.00';
   perPersonTipSum.textContent = '0.00';

});

billInput.addEventListener("change", someFnc);
