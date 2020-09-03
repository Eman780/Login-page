var dbUser= "Sipon";
var dbPass="abcd";


var p1="student"
var p2="teacher"
var p3="madam"


document.querySelector("#log_btn").addEventListener("click",function(){ 
    var uInputUserName=document.querySelector("#user").value;
    var uInputUserPass=document.querySelector("#pass").value;
    var person=document.querySelector("#person").value.toLowerCase();
    
    if(uInputUserName==="" || uInputUserPass==="" || person==="" ){
        document.querySelector("#errMse").innerHTML="All fields must be filled in ";
         
    }else if((uInputUserName===dbUser && uInputUserPass!==dbPass) && (person===p1 || person===p2 || person===p3)){

        document.querySelector("#errMse").innerHTML="password is wrong. ";

    }else if((uInputUserName!==dbUser && uInputUserPass===dbPass) && (person===p1 || person===p2 || person===p3)){

        document.querySelector("#errMse").innerHTML="User name is wrong. ";
        
    }else if((uInputUserName!==dbUser && uInputUserPass!==dbPass) && (person===p1 || person===p2 || person===p3)){
        
        document.querySelector("#errMse").innerHTML="User name and password is wrong. ";
        
    }else if((uInputUserName===dbUser && uInputUserPass===dbPass) && (person===p1 || person===p2 || person===p3)){

        document.querySelector("#loginBox").style.display="none";

        if(person===p1){
            document.querySelector("#wellcomePage").innerHTML="<h1>You are logged in!</h1><h1>Welcome Bro!</h1> ";
        }else if(person===p2){
            document.querySelector("#wellcomePage").innerHTML="<h1>You are logged in!</h1><h1>Welcome Sir!</h1> ";
        }else if(person===p3){
            document.querySelector("#wellcomePage").innerHTML="<h1>You are logged in!</h1><h1>Welcome Madam!</h1> ";
        }
       }else{
        document.querySelector("#errMse").innerHTML="You are tobacco.get lost";
        
    }
 });