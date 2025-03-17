function updateClock(){
    const time=new Date();
    let hours=time.getHours();
    const  meredian=hours>=12 ?"PM" : "AM"
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const showTime=`${hours}:${minutes}:${seconds}  ${meredian}`;
    document.getElementById("clock").textContent = showTime;
    
}
updateClock();
setInterval(updateClock,1000)