import validator from './validator.js';

//Validator.

const cardNumber = document.getElementById("cardnumber");
cardNumber.addEventListener("keypress", validateNumber)

function validateNumber(event) {
  const key = String.fromCharCode(event.charCode);
  if (isNaN(key)) {
    event.preventDefault()
  }
}

const button = document.getElementById("btn");
button.addEventListener("click", validate)

export function validate() {
  const cardNumber = document.getElementById("cardnumber").value;
  const result = document.getElementById("result")

  result.style.display = "block";
  
  if (cardNumber === "") {
    result.innerHTML= "La tarjeta no puede ser vacia"
    return
  }


  const valid = validator.isValid(cardNumber)

  if (valid) {
    // Show success in div#result
    result.innerHTML = "La tarjeta es valida"
    //alert("la tarjeta es valida")
  }
  else {
    // Show error message in div#result
    result.innerHTML = "La tarjeta es invalida"
    //alert("la tarjeta es invalida")
  }
 

  document.getElementById("cardnumber").value = validator.maskify(cardNumber)

  //document.getElementById("cardnumber").value = validator.fValidarTarjeta(cardNumber)

}