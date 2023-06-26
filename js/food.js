function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("home-adr");
    var kindInput = document.getElementById("kind");
    var QuantityInput = document.getElementById("Quantity");
    var dietaryInput = document.getElementById("dietary");


  
    //error var
    var fullnameError = document.getElementById("fullnameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var addressError = document.getElementById("addressError");
    var kindError = document.getElementById("kindError");
    var QuantityError = document.getElementById("QuantityError");
    var dietaryError = document.getElementById("dietaryError");

  
    // Clear previous error messages
    fullnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    kindError.textContent = "";
    QuantityError.textContent = "";
    dietaryError.textContent = "";

  
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
    if (kindInput.value.trim() === "") {
        kindError.textContent = "Please provide a kind of food!";
        kindInput.focus();
      return false;
    }
    if (QuantityInput.value.trim() === "") {
        QuantityError.textContent = "Please provide a quantity of toys!";
      QuantityInput.focus();
      return false;
    }

    if (dietaryInput.value.trim() === "") {
        dietaryError.textContent = "Please provide a Dietary Restriction or Special Consideration!";
        dietaryInput.focus();
    return false;
    }
  
    return true;
  }
  