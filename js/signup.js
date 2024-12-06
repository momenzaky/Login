let userName = document.querySelector(".signUp .userName");
let userEmail = document.querySelector(".signUp .userEmail");
let userPassword = document.querySelector(".signUp .userPassword");
let siteContainer=[];
let errorInputs= document.querySelector(".errorInputs")
let acceptInputs= document.querySelector(".acceptInputs")
let emailInputs= document.querySelector(".emailInputs")
let signBtn =document.getElementById("sign")
function createSite(){

    if (localStorage.getItem("userSite") !== null) {
        siteContainer = JSON.parse(localStorage.getItem("userSite"))
        
    }


    if (!userName.value || !userEmail.value || !userPassword.value) {
        errorInputs.classList.remove("d-none");
        acceptInputs.classList.add("d-none");
        emailInputs.classList.add("d-none");
        return;
        
    }else{
        acceptInputs.classList.remove("d-none");
        errorInputs.classList.add("d-none");
        emailInputs.classList.add("d-none");
        userEmail.classList.remove("is-valid");
        userPassword.classList.remove("is-valid");
       
    }


    for (let i = 0; i < siteContainer.length; i++) {
        if (siteContainer[i].email === userEmail.value) {
            emailInputs.classList.remove("d-none");
            acceptInputs.classList.add("d-none")
            
            return;  
        }}

    var dataSite={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,

    }

    siteContainer.push(dataSite);
    localStorage.setItem("userSite", JSON.stringify(siteContainer))
    console.log(siteContainer);
    clearForm();
    
   
    

}

function clearForm(){
    userName.value= "";
    userEmail.value= "";
    userPassword.value= "";
}

function validateSiteEmail() {
   let regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
   let errorEmail=document.getElementById("errorEmail")
    if (regex.test(userEmail.value)) {
       userEmail.classList.add("is-valid")
       userEmail.classList.remove("is-invalid")
        errorEmail.classList.add("d-none")
    } else {
       userEmail.classList.remove("is-valid")
       userEmail.classList.add("is-invalid")
        errorEmail.classList.remove("d-none")
    }
}
function validateSitePassword() {
    let regex =  /^(?=.*[a-zA-Z0-9]).{8,}$/
    let errorPassword=document.getElementById("errorPassword")
    if (regex.test(userPassword.value)) {
       userPassword.classList.add("is-valid")
       userPassword.classList.remove("is-invalid")
        errorPassword.classList.add("d-none")
    } else {
       userPassword.classList.remove("is-valid")
       userPassword.classList.add("is-invalid")
        errorPassword.classList.remove("d-none")
    }
}

userEmail.addEventListener("input", validateSiteEmail);
userPassword.addEventListener("input", validateSitePassword);


signBtn.addEventListener("click", function (e) {
    e.preventDefault(); 
})