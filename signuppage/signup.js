const shopicon = document.getElementsByClassName('shop-icon')[0];
const loginbtn = document.getElementsByClassName('login-button')[0];
const logincontainer = document.getElementsByClassName('login-container')[0];
const accountbtn = document.getElementById('acountbtn');

// select input field with help of id 
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const emailinput = document.getElementById('email');
const passwordinput = document.getElementById('password');
const confirmpass = document.getElementById('confirmpassword');
const warningmsg = document.getElementById("warningmsg");


shopicon.addEventListener('click', () => {
    if (logincontainer.style.display === "block") {
        logincontainer.style.display = "none";
    } else {
        logincontainer.style.display = "block"
    }
});

accountbtn.addEventListener('click', (event) => {
    event.preventDefault();
       if (fname.value === "" || lname.value === "" || emailinput.value === "" || passwordinput.value === "" || confirmpass.value === "") {
        warningmsg.innerHTML = "Please fill in all required fields.";
        return flase;
    }

    //input values
    const firstname = fname.value;
    const lastname = lname.value;
    const email = emailinput.value;
    const password = passwordinput.value;
    const confirmpassword = confirmpass.value;

    //storing values in local storage

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);


    alert("Account created Successfully");
    // window.location.assign("file:///C:/Users/admin/Desktop/Shop%20Project/loginpage/login.html");
    window.location.href = "../loginpage/login.html";
     
            
j    // return true;

    //reset input field
    fname.value = '';
    lname.value = '';
    emailinput.value = '';
    passwordinput.value = '';
    confirmpass.value = '';
    warningmsg.value = '';

});    