

//validator.isValid(creditCardNumber)= lo del algoritmo

const validator = {

  isValid: (creditCardNumber) => {
    const array = creditCardNumber.split("").map(Number);
    //console.log(array)
    const reversed = array.reverse();
    //console.log(reversed)

    let sum = 0;
    for (let i = 0; i < reversed.length; i++) {
      const pos = i + 1;

      if (pos % 2 === 0) {
        reversed[i] = reversed[i] * 2;
        //console.log(reversed[i])    s
      }
      if (reversed[i] > 9) {
        //console.log(reversed[i])
        const num = reversed[i].toString().split("").map(Number);
        //console.log(num)
        reversed[i] = num[0] + num[1];
        //console.log(reversed[i])
      }
      sum += reversed[i]

    }

    return sum % 10 === 0;

  },
  maskify: (numero) => {
    const fourSaved = numero.slice(-4) // put a negative number within the parameters so it starts from backwards. This variable will save the last 4 characters of the string.
    const numeroArr = numero.split("") //turned string into an array for easier manipulation
    for (let i = 0; i < numeroArr.length; i++) {
      numeroArr[i] = numeroArr[i].replace(/[a-z0-9]/g, '#') //so each and every element in the array is changed into a #
    }
    const arrStr = numeroArr.join(''); //Changing array back to string
    const masked = arrStr.slice(0, -4) + fourSaved;
    return masked
  }
}
//validator.maskify(creditCardNumber)




export default validator;