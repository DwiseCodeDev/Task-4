function validation ()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
 
   if (name=="" || title=="" || message=="")
   { document.getElementById("required").innerHTML = "Oops, please input each details";
    return false;
   }
   else if (name.length <4){
     document.getElementById("required").innerHTML = "Oops, please input Your Full Name";
     return false;
   }
   else if (message.length <20){
     document.getElementById("required").innerHTML = "I want to hear from you, Please!";
     return false;
   }
    else if(email.indexOf("@") == -1 || email.length <6){
     text = "Please Enter Valid Email Address";
     error_message.innerHTML = text;
     return false;
 }
 else{ ("Form Submitted Succesfully!")
 return true;
 }
 }