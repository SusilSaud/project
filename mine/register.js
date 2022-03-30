const userName = document.getElementById('txtUserName');
const password = document.getElementById('txtPassword');
const cPassword = document.getElementById('txtcPassword');
const email = document.getElementById('txtEmail');
const phone = document.getElementById('txtPhone');
const address = document.getElementById('txtAddress');
// const date = document.getElementById('txtDateOfBirth');
// const gender = document.getElementById('gender');
const form = document.getElementById("form1");
let validUserName = false;
let validPassword = false;
let confirmPassword = false;
let validEmail = false;
let validPhone = false;
let validAddress = false;
// let validDate = false;
// let validGender = false;

// const after that is declared variable for storing specific id value
// const after declareda varaible name should not match with let variable name in this js validation


userName.addEventListener("blur", () => {
    // let regx = /^[a-zA-Z]([a-zA-Z0-9/._/-]){2,10}$/; no space
    let regx = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/; //for single space between name and surname
    // let regx = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    console.log("UserName is blurred");
    if (userName.value === "" || userName.value == null) {
        let obj=document.getElementById('userName');
        obj.innerText="User name is required";
        obj.classList.add('show');
        userName.classList.add("error");
        userName.focus();
        validUserName = false;
    }
    else if (!regx.test(userName.value)) {
        let obj=document.getElementById('userName');
        obj.innerText="Invalid User name";
        //document.getElementById('userName').innerText = "Invalid UserName";
        validUserName = false;
        obj.classList.add('show');
        userName.classList.add("error");
        userName.focus();
    }
    else {
        document.getElementById('userName').innerText = "";
        validUserName = true;
        userName.classList.remove("error");
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
cPassword.addEventListener("blur", () => {
    if (cPassword.value === "" || cPassword.value == null) {
        let obj=document.getElementById('cPassword');//span tag error id for cPassword i.e conPassword
        obj.innerText = "Confirm your Password is required";
        confirmPassword = false;
        obj.classList.add('show');
        cPassword.classList.add("error");
        cPassword.focus();
    }
    else if (password.value !== cPassword.value) {
        document.getElementById('cPassword').innerText = "Password and Confirm password must match";//span tag error id for rePassword i.e conPassword
        confirmPassword = false;
        cPassword.classList.add("error");
        cPassword.focus();
    }
    else {
        document.getElementById('cPassword').innerText = "";//span tag error id for rePassword i.e conPassword
        confirmPassword = true;
        cPassword.classList.remove("error");
    }
})
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
phone.addEventListener("blur", () => {
    //regx=^[+0-9\-]{5}([0-9]{10})$//Match phone number with nepal's zip code
    let regx = /^[0-9]{10}$/;
    if (phone.value === "" || phone.value == null) {
        let obj=document.getElementById('phone');
        obj.innerText = "Phone number is required";
        validPhone = false;
        phone.classList.add("error");
        obj.classList.add('show');
        phone.focus();
    }
    else if (!regx.test(phone.value)) {
        let obj=document.getElementById('phone');
        obj.innerText = "Invalid Phone number";
        obj.classList.add('show');
        validPhone = false;
        phone.classList.add("error");
        phone.focus();
    }
    else {
        document.getElementById('phone').innerText = "";
        validPhone = true;
        phone.classList.remove("error");
    }
})
//for address
    address.addEventListener("blur", () => {
        let regx = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
           console.log("Address is blurred");
        if (address.value === "" || address.value == null) {
            let obj=document.getElementById('address');
            obj.innerText="Address is required";
            obj.classList.add('show');
            address.classList.add("error");
            address.focus();
           validAddress = false;
        }
        else if (!regx.test(address.value)) {
            let obj=document.getElementById('address');
            obj.innerText="Invalid address ";
           validAddress = false;
            obj.classList.add('show');
            address.classList.add("error");
            address.focus();
        }
        else {
            document.getElementById('address').innerText = "";
           validAddress = true;
            address.classList.remove("error");
        }
    })

    //for gender
    // gender.addEventListener("blur", () => {
    //     if (gender.value === "" || gender.value == null) {
    //         let obj=document.getElementById('gender');
    //         obj.innerText="Gender is required";
    //         obj.classList.add('show');
    //         gender.classList.add("error");
    //         gender.focus();
    //        validGender = false;
    //     }
    //     else if (!regx.test(gender.value)) {
    //         let obj=document.getElementById('gender');
    //         obj.innerText="Invalid gender ";
    //        validGender = false;
    //         obj.classList.add('show');
    //         gender.classList.add("error");
    //         gender.focus();
    //     }
    //     else {
    //         document.getElementById('gender').innerText = "";
    //        validGender = true;
    //         gender.classList.remove("error");
    //     }
    // })


form.addEventListener("submit", (e) => {
    if (!(validUserName==true && validEmail==true && validAddress==true && validPhone==true && validPassword==true && confirmPassword==true)) {
        // if (!(validUserName==true && validEmail==true && validGender == true && validDate == true && validAddress == true && validPhone==true && validPassword==true && confirmPassword==true)) {
        e.preventDefault();
        let length=document.getElementsByClassName('hide').length;
        for(i=0;i<length;i++){
            document.getElementsByClassName('hide')[i].classList.add('show');
            document.getElementsByClassName('form-control')[i].classList.add('error');
        }
        userName.focus();
    }
})


