const slides=[...document.querySelectorAll(".slide")];
let index=0;
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
function show(i){
  index=(i+slides.length)%slides.length;
  slides.forEach((s,n)=>s.classList.toggle("active",n===index));
  counter.textContent=`${index+1} / ${slides.length}`;
  progress.style.width=`${((index+1)/slides.length)*100}%`;
  document.title=`${slides[index].dataset.title} • Pi SME Project Update`;
}
document.getElementById("nextBtn").onclick=()=>show(index+1);
document.getElementById("prevBtn").onclick=()=>show(index-1);
document.getElementById("notesBtn").onclick=()=>document.body.classList.toggle("show-notes");
document.getElementById("fsBtn").onclick=()=>{
  if(!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
};
document.addEventListener("keydown",e=>{
  if(["ArrowRight","PageDown"," "].includes(e.key)){e.preventDefault();show(index+1)}
  if(["ArrowLeft","PageUp"].includes(e.key)){e.preventDefault();show(index-1)}
  if(e.key==="Home")show(0);
  if(e.key.toLowerCase()==="n")document.body.classList.toggle("show-notes");
  if(e.key.toLowerCase()==="f"){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
});
show(0);