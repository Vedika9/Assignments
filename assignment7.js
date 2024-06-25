let emailadd=document.getElementById("email");
let password=document.getElementById("pass");


function validate(){
    if(!emailadd.value && !password.value){
        document.getElementById("emailerror").innerText="Please enter valid email address";
        document.getElementById("passerror").innerText="Password must be at least 6 character long";
        return;
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
    alert("Login successfully");
}