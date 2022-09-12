// javascript here
const btn= document.getElementById("btn");
const color= document.querySelector(".color");
//const letter= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];// array of the hex color
const letter= "0123456789ABCDEF";// this is string of the letter code
 btn.addEventListener("click", function(){
     let hexColor= "#";
    for (let i = 0; i < 6; i++) {
        hexColor+=letter[getRandomColor()];
        
    }
    color.textContent= hexColor; // color.textContent property
    document.body.style.backgroundColor=hexColor;// assign the hexcolor to the body of the html docs

});

function getRandomColor(){
    return Math.floor(Math.random()*16);// multiply by 16 hex number here
}

