
document.forms['signup-form'].onsubmit = function(event){

    if(this.email.value.trim() === ""){
        document.querySelector(".email-error").innerHTML = "Please enter your email to continue";
        document.querySelector(".email-error").style.display = "block";
        event.preventDefault();
        return false;
     }
   
    if(this.username.value.trim() === ""){
       document.querySelector(".username-error").innerHTML = "Please enter a username to continue";
       document.querySelector(".username-error").style.display = "block";
       event.preventDefault();
       return false;
    }
  
    if(this.password.value.trim() === ""){
       document.querySelector(".password-error").innerHTML = "Please enter a password to continue";
       document.querySelector(".password-error").style.display = "block";
       event.preventDefault();
       return false;
    }
 }	