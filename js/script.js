let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
let loginBtn = document.querySelector(".login");
let errorInputs = document.querySelector("#errorInputs");   

loginBtn.addEventListener("click", function() {
    let siteContainer = JSON.parse(localStorage.getItem("userSite"));
    
    if (siteContainer && siteContainer.length > 0) {
        let isValidUser = false;


        for (let i = 0; i < siteContainer.length; i++) {
            if (siteContainer[i].email === userEmail.value && siteContainer[i].password === userPassword.value) {
                isValidUser = true; 
                localStorage.setItem("userName", siteContainer[i].name);
                window.location.href = "home.html";    
                break;
            }
        }

        if (!isValidUser) {
            errorInputs.classList.remove("d-none"); 
        }
    } 
});