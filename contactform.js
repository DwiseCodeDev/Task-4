
function ContactForm()
{ 
var name = document.forms["ContactForm"]["name"];               
var email = document.forms["ContactForm"]["email"];    
var title = document.forms["ContactForm"]["title"];
var message = document.forms["ContactForm"]["message"];  

if (name.value < 4)                                  
{ 
    window.alert("Name: Your name should be longer than 4 characters."); 
    name.focus(); 
    return false; 
} 
   
if (email.value == "")                                   
{ 
    window.alert("E-mail: Please give me a valid e-mail address."); 
    email.focus(); 
    return false; 
} 

if (email.value.indexOf("@", 0) < 0)                 
{ 
    window.alert("E-mail: Please give me a valid e-mail address."); 
    email.focus(); 
    return false; 
} 

if (email.value.indexOf(".", 0) < 0)                 
{ 
    window.alert("E-mail: Please give me a valid e-mail address."); 
    email.focus(); 
    return false; 
} 

if (title.value == "")                           
{ 
    window.alert("Please enter your title."); 
    title.focus(); 
    return false; 
} 

if (message.value < 20)                        
{ 
    window.alert("Message: Please use at least 20 characters in your message"); 
    message.focus(); 
    return false; 
} 

return true; 
}