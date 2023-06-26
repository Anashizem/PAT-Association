function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("home-adr");
    var anameInput = document.getElementById("aname");
    var noteInput = document.getElementById("message");
  
    //error var
    var fullnameError = document.getElementById("fullnameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var addressError = document.getElementById("addressError");
    var anameError = document.getElementById("anameError");
    var noteError = document.getElementById("noteError");
  
    // Clear previous error messages
    fullnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    anameError.textContent = "";
    noteError.textContent = "";
  
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
  
    if (anameInput.value.trim() === "") {
      anameError.textContent = "Please provide an animal name!";
      anameInput.focus();
      return false;
    }
  
    if (noteInput.value.trim() === "") {
      noteError.textContent = "Please provide a message!";
      noteInput.focus();
      return false;
    }
  
    return true;
  }
  