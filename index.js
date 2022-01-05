// var name1=prompt("Enter you name please: ");
// document.querySelector(".welcome_text").innerHTML="HELLO "+name1+" WELCOME TO MY PROFILE";
document.querySelector(".my_name").addEventListener("mouseover",function(){
    document.querySelector(".my_name").innerHTML="A WEB DEVELOPER";
    setTimeout(recover, 1000);
})
function recover(){
    document.querySelector(".my_name").innerHTML="GAURAV SINGH";
}
