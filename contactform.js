function validation() {
    let name = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let formerrormsg = document.getElementById("formerrormsg");

    console.log('working')

    if(name.value == ""){
        formerrormsg.innerText = 'Enter your first name.';
    }
    else if(name2.value == ""){
        formerrormsg.innerText = 'Enter your second name.';
    }
    else if(number.value == ""){
        formerrormsg.innerText = 'Enter your number.';
    }
    else if(number.value.length <= 8 ){
        formerrormsg.innerText = 'Number should not be less than 8 digits.';
    }
    else if(email.value == ""){
        formerrormsg.innerText = 'Enter your email.';
    }
    else if(message.value == ""){
        formerrormsg.innerText = 'Enter your message.';
    }
    else{
        sendMail();
    }
};

// sending mail  
function sendMail() {
    var params = {
        name: document.getElementById("name1").value ,
        name2: document.getElementById("name2").value ,
        number: document.getElementById("number").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value
    };

const serviceId = "service_3rxb4xk";
const templateId = "template_umlq6lj";

emailjs
.send(serviceId, templateId, params)
.then((res) => {
        document.getElementById("name1").value = "";
        document.getElementById("name2").value = "";
        document.getElementById("number").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("formerrormsg ").value = "";
        console.log(res);
        alert("you message has been sent successfuly"); 
        }
)
.catch((err) => console.log(err));
}