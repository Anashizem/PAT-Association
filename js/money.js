function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("home-adr");
    var moneyInput = document.getElementById("money");
    var projetInput = document.getElementById("projet");




      
    //error var
    var fullnameError = document.getElementById("fullnameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var addressError = document.getElementById("addressError");
    var moneyError = document.getElementById("moneyError");
    var projetError = document.getElementById("projetError");





    // Clear previous error messages
    fullnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    moneyError.textContent = "";
    projetError.textContent = "";


    if (nameInput.value.trim() === "") {
        fullnameError.textContent = "Please provide your full name!";
        nameInput.focus();
        return false;
      }
    
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Please provide your email!";
        emailInput.focus();
        return false;
      }
    
      if (phoneInput.value.length !== 8) {
        phoneError.textContent = "Please provide a phone number with 8 digits!";
        phoneInput.focus();
        return false;
      }
    
      if (addressInput.value.trim() === "") {
        addressError.textContent = "Please provide an address!";
        addressInput.focus();
        return false;
      }
    
      if (moneyInput.value.trim() === "") {
          moneyError.textContent = "Please provide the money!";
        moneyInput.focus();
        return false;
      }
      if (projetInput.value.trim() === "") {
        projetError.textContent = "Please provide a projet!";
      projetInput.focus();
      return false;
    }
      return true;
    }
    



