const randomColor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalID;

const startchangeColor = function(){
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000);
    }
    
    console.log(intervalID);    
}
const stopchangeColor = function(){
    clearInterval(intervalID)
    intervalID = null;
    console.log(intervalID);
}

document.querySelector('#start').addEventListener
('click',startchangeColor)
document.querySelector('#stop').addEventListener
('click',stopchangeColor)