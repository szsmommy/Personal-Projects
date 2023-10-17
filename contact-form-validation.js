function validateForm() {
    let x = document.forms["myForm"]["fname"]["phnum"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  const isValid = (usernameInputValue) => {

    if (!validator.isEmpty(usernameInputValue) && validator.isLength(usernameInputValue, { min: 5 })) {
    
    return {
    
    valid: true,
    
    msg: null
    }
    
 } else {  
    if (validator.isEmpty(fname)) {
      return {
        valid: false,
        msg: "Required"
      }
   
    } else {
      return {
        valid: false,
        msg: "Input invalid"
      }
    }
    