let num1, num2;

function generateCaptcha(){
    num1 = Math.floor(Math.random()*10)+1;
    num2 = Math.floor(Math.random()*10)+1;

    document.getElementById("captchaQuestion").textContent =
    "Captcha: (" + num1 + " + " + num2 + ")";
}

document.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let userAnswer = parseInt(
        document.getElementById("captchaInput").value
    );

    if(userAnswer !== num1 + num2){
        alert("Captcha incorrect. Try again!");
        generateCaptcha();
        return;
    }

    const datapass = "11001100";
    let pass = document.getElementById("password").value;

    if(pass === datapass){
        alert("Login successful!");
    } else {
        alert("Password incorrect");
    }
});

generateCaptcha();
