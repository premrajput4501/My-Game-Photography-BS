document.querySelector("#navbutton").addEventListener("click",function(){
    var audio = new Audio('./Sounds/click1.wav');
    audio.play();
})

document.querySelector("#navbuttonclose").addEventListener("click",function(){
    var audio = new Audio('./Sounds/coolclick.wav');
    audio.play();
})

document.querySelector(".carousel-control-next-icon").addEventListener("click",function(){
    var audio = new Audio('./Sounds/swipe.mp3');
    audio.play();
})

document.querySelector(".carousel-control-prev-icon").addEventListener("click",function(){
    var audio = new Audio('./Sounds/swipe.mp3');
    audio.play();
})

document.querySelector(".navlogo").addEventListener("click",function(){
    var audio = new Audio('./Sounds/slash.mp3');
    audio.play();
})

document.querySelector(".navlink").addEventListener("click",function(){
    var audio = new Audio('./Sounds/slash.mp3');
    audio.play();
})