function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}


const toggle_btn = document.querySelector('#checkbox')

toggle_btn.addEventListener('change',() => {


if(toggle_btn.checked){
    document.body.classList.add('dark-mode')
}else{
    document.body.classList.remove('dark-mode')
}
})



document.addEventListener('mousemove',(e)=>{

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor')
    const rect = anchor.getBoundingClientRect();

    const anchorX = rect.left +  rect.width/2;
    const anchorY = rect.top + rect.height/2;

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye =>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })

})

function angle(cx,cy,ex,ey){
    const dy = ey - cy ;
    const dx = ex - cx ;
    const rad = Math.atan2(dy,dx);
    const deg = rad*180 / Math.PI;
    return deg;
}


