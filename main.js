let secondHand=document.querySelector(".seconds-hand");
let minHand=document.querySelector(".mins-hand");
let hoursHand=document.querySelector(".hours-hand");


const changTime=()=>{
    const currentTime =new Date()
    let TimeSeconds=currentTime.getSeconds();
    let secondsDegree=((TimeSeconds/60)*360)+90
    secondHand.style.transform=`rotate(${secondsDegree}deg)`
    let Timeminuts=parseInt(currentTime.getMinutes());
    let minutsDegree=(((Timeminuts/60)*360)+((TimeSeconds/60)*6))+90;
        minHand.style.transform=`rotate(${minutsDegree}deg)`
    let hoursDegree=(((currentTime.getHours()/12)*360)+(((Timeminuts)/60)*30))+90;
        hoursHand.style.transform=`rotate(${hoursDegree}deg)`


}

setInterval(changTime,1000);
