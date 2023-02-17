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
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click",()=>{
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})