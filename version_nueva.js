function mover(){
    var segundos=document.querySelector(".segundos");
    var minutos=document.querySelector(".minutos");
    var horas=document.querySelector(".horas");
    var date= new Date();
    var s=date.getSeconds();
    var m=date.getMinutes();
    var h=date.getHours();
    segundos.style.transform="rotate("+s*6+"deg)";
    minutos.style.transform="rotate("+m*6+"deg)";
    horas.style.transform="rotate("+((h*30)+((m*12)/30))+"deg)";
    
}
setInterval(mover, 1000);