//some events that we learn yet 
//click=> jb button pe click hu
//mouseenter=> jb button pe hover hu
//mouseleave=> jb button se hove hone ke bad dour hu
//keypress=>jb input field ma kuch bi press hu or auske sath sath ausse press value ka keycode backend pe ajata ha 
//input=>jb bi input ki value change hu to tb ya event call hota ha

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";
    css.textContent=body.style.background + ";";
}

//niche wali 2no events ka alternate bi ha or wo ha........ oninput="setGradient()"

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);