let logBtn=document.querySelector(".log")

let siteContainer = JSON.parse(localStorage.getItem("userSite"));

(function displayData(){
    let cartona=""

   
    let userName = localStorage.getItem("userName");
    cartona+=` <h1 class="color-aqua">Welcome ${userName}</h1>`
    
   
     
        
    
    document.querySelector(".welcome").innerHTML=cartona;
})();

logBtn.addEventListener("click",function(){
    window.location.href="index.html"
})


