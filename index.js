let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
 var typed = new Typed(".typing", {
  strings: ["Java Backend Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

document.getElementById('resume-link-1').addEventListener("click",()=>{
  window.location.assign("https://drive.google.com/file/d/1C14hLdEa5hCgm44BG8F5cTMcFFkvyTsN/view?usp=sharing", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click",()=>{
  window.location.assign("https://drive.google.com/file/d/1C14hLdEa5hCgm44BG8F5cTMcFFkvyTsN/view?usp=sharing", "_blank");
})