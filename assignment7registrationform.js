let emailadd=document.getElementById("email");
let pname=document.getElementById("name");
let password=document.getElementById("pass");
let phoneno=document.getElementById("phone");

function validate(){
    if(!pname.value && !emailadd.value && !password.value && !phoneno.value){
        document.getElementById("nameerror").innerText="Please enter your name";
        document.getElementById("emailerror").innerText="Please enter valid email address";
        document.getElementById("passerror").innerText="Password must be at least 6 character long";
        document.getElementById("phoneerror").innerText="Please enter valid phone number";
        return;
    }

    if(pname.value==""){
        document.getElementById("nameerror").innerText="Please enter your name";
        return;
    }
    else{
        document.getElementById("nameerror").innerText="";
    }
    if(emailadd.value==""){
        document.getElementById("emailerror").innerText="Please enter valid email address";
        return;
    }
    else{
        document.getElementById("emailerror").innerText="";
    }
    if (!emailadd.checkValidity()) {
        emailadd.reportValidity();
        return;
    }
    else{
        document.getElementById("emailerror").innerText="";
    }
    if(password.value.length<6){
        document.getElementById("passerror").innerText="Password must be at least 6 character long";
        return;
    }
    else{
        document.getElementById("passerror").innerText="";
    }
     let no=/^\d{10}$/;
    if(isNaN(phoneno.value)){
        document.getElementById("phoneerror").innerText="Please enter valid phone number";
        return;
    }
    if(!(phoneno.value.match(no))){
        document.getElementById("phoneerror").innerText="Please enter valid phone number";
        return;
    }
    // else{
    //     document.getElementById("phoneerror").innerText="";
    // }
    alert("Registration successfully");
}