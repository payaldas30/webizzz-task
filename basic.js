let btn=document.querySelector("#btn");
let centMod="theme-one";
btn.addEventListener("click",()=>{
    alert("HELLO !you are trying to change new theme");
    // console.log("you are trying to change new theme");
    if (centMod==="theme-one") {
        centMod="theme-two";
        document.querySelector("body").style.backgroundColor="#853E72";
    }
     else if(centMod==="theme-two"){
        centMod="theme-three";
        document.querySelector("body").style.backgroundColor="#776472";
    }
    else if (centMod==="theme-three"){
        centMod="theme-four";
        document.querySelector("body").style.backgroundColor="#fff";
    }
    else if (centMod==="theme-four"){
        centMod="theme-five";
        document.querySelector("body").style.backgroundColor="#74263F";
    }
    else if (centMod==="theme-five"){
        centMod="theme-six";
        document.querySelector("body").style.backgroundColor="#3B0E0F";
    }
    else if (centMod==="theme-six"){
        centMod="theme-seven";
        document.querySelector("body").style.backgroundColor="#000";
    }
    else if (centMod==="theme-seven"){
        centMod="theme-eight";
        document.querySelector("body").style.backgroundColor="#5A8ACC";
    }
    else if (centMod==="theme-eight"){
        centMod="theme-nine";
        document.querySelector("body").style.backgroundColor="#519725";
    }
    else if (centMod==="theme-nine"){
        centMod="theme-ten";
        document.querySelector("body").style.backgroundColor="#d7ae17";
    }
    else if (centMod==="theme-ten"){
        centMod="theme";
        document.querySelector("body").style.backgroundColor="#ff1053";
    }
    else{
        centMod="theme-one";
        document.querySelector("body").style.backgroundColor="rgb(32, 32, 56)";
    }
    // console.log(centMod);
});


//digital clock
const clock=setInterval(function time(){
    const d=new Date();
    let hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    const hour=document.getElementById("hours").innerText=hr;
    const minute=document.getElementById("min").innerText=min;
    const seconds=document.getElementById("sec").innerText=sec;
}, 1000);



