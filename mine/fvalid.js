const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');
const form = document.getElementById("form1");
let validEmail = false;
let validPassword = false;

email.addEventListener("blur", () => {
    let regx = /^[a-zA-Z_]([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]){2,4}$/;
    if (email.value === "" || email.value == null) {
        let obj=document.getElementById('email');
        obj.innerText = "Email field is required";
        validEmail = false;
        obj.classList.add('show');
        email.classList.add("error");
        email.focus();
    }
    else if (!regx.test(email.value)) {
        let obj=document.getElementById('email');
        obj.innerText = "Invalid email address";
        validEmail = false;
        obj.classList.add('show');
        email.classList.add("error");
        email.focus();
    }
    else {
        document.getElementById('email').innerText = "";
        validEmail = true;
        email.classList.remove("error");
    }
})

password.addEventListener("blur", () => {
    if (password.value === "" || password.value == null) {
        let obj=document.getElementById('password');
        obj.innerText = "Password is required";
        validPassword = false;
        obj.classList.add('show');
        password.classList.add("error");
        password.focus();
        //password.focus();
    }
    else if (password.value.length < 6) {
        let obj=document.getElementById('password');
        obj.innerText = "Password must be of at least 6 charadters";
        validPassword = false;
        obj.classList.add('show');
        password.classList.add("error");
        password.focus();
    }
    else {
        document.getElementById('password').innerText = "";
        validPassword = true;
        password.classList.remove("error");
    }

})


form.addEventListener("submit", (e) => {
    if (!( validEmail==true && validPassword==true)) {
        e.preventDefault();
        let length=document.getElementsByClassName('hide').length;
        for(i=0;i<length;i++){
            document.getElementsByClassName('hide')[i].classList.add('show');
            document.getElementsByClassName('form-control')[i].classList.add('error');
        }
        userName.focus();
    }
})
