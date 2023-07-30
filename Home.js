let fCurrency = "USD"; // to make first currency as a global varible and i assign then to usd so it can work for first time the page loaded
let sCurrency = "USD"; // to make second currency as a global varible 

//to get the first currncy after any change
function assignFirstCurrency(value) {
  fCurrency = value;
  updateSecondInput(document.getElementById("number_input").value);// didn't work
}

//to get the second currency after any change
function assignSecondCurrency(value) {
  sCurrency = value;
  updateSecondInput(document.getElementById("number_input").value);//i tried to use the function again so when the user change currncy it the user doesn't have to change the number again but it didn't work 
}

//to change the second input and show the user the cal
// and i got all the number from google to calculate them
function updateSecondInput(value) {
    //for usd to usd
  if (fCurrency === "USD" && sCurrency === "USD") { 
    const newValue = parseFloat(value);
    document.getElementById("second_input").value = newValue;
  }
  //for usd to eur
  if (fCurrency === "USD" && sCurrency === "EUR") { 
    const newValue = parseFloat(value)*0.91;
    document.getElementById("second_input").value = newValue;
  } 
  //for usd to gbp
  if (fCurrency === "USD" && sCurrency === "GBP") { 
    const newValue = parseFloat(value)*0.78;
    document.getElementById("second_input").value = newValue;
  } 

  //for usd to jpy
  if (fCurrency === "USD" && sCurrency === "JPY") { 
    const newValue = parseFloat(value)*141.15;
    document.getElementById("second_input").value = newValue;
  }
  // for eur to usd
  if (fCurrency === "EUR" && sCurrency === "USD") { 
    const newValue = parseFloat(value)*1.1;
    document.getElementById("second_input").value = newValue;
  }
  //for eur to eur
  if (fCurrency === "EUR" && sCurrency === "EUR") { 
    const newValue = parseFloat(value);
    document.getElementById("second_input").value = newValue;
  } 
  //for eur to gbp
  if (fCurrency === "EUR" && sCurrency === "GBP") { 
    const newValue = parseFloat(value)*0.86;
    document.getElementById("second_input").value = newValue;
  } 
  //for eur to jpy
  if (fCurrency === "EUR" && sCurrency === "JPY") { 
    const newValue = parseFloat(value)* 155.76;
    document.getElementById("second_input").value = newValue;
  }
      //for GBP to usd
      if (fCurrency === "GBP" && sCurrency === "USD") { 
        const newValue = parseFloat(value)*1.28;
        document.getElementById("second_input").value = newValue;
      }
      //for gbp to eur
      if (fCurrency === "GBP" && sCurrency === "EUR") { 
        const newValue = parseFloat(value)*1.16;
        document.getElementById("second_input").value = newValue;
      } 
      //for gbp to gbp
      if (fCurrency === "GBP" && sCurrency === "GBP") { 
        const newValue = parseFloat(value);
        document.getElementById("second_input").value = newValue;
      } 
      //for GBP to jpy
      if (fCurrency === "GBP" && sCurrency === "JPY") { 
        const newValue = parseFloat(value)*181.23;
        document.getElementById("second_input").value = newValue;
      }
      // for JPY to usd
      if (fCurrency === "JPY" && sCurrency === "USD") { 
        const newValue = parseFloat(value)*0.0071;
        document.getElementById("second_input").value = newValue;
      }
      //for jpy to eur
      if (fCurrency === "JPY" && sCurrency === "EUR") { 
        const newValue = parseFloat(value)*0.0077;
        document.getElementById("second_input").value = newValue;
      } 
      //for jpy to gbp
      if (fCurrency === "JPY" && sCurrency === "GBP") { 
        const newValue = parseFloat(value)* 0.0055;
        document.getElementById("second_input").value = newValue;
      } 
      //for JPY to jpy
      if (fCurrency === "JPY" && sCurrency === "JPY") { 
        const newValue = parseFloat(value);
        document.getElementById("second_input").value = newValue;
      }
}