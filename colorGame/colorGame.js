
var totalSquares = 6;
var colors; 
var pickedColor;  

//ELEMENT SELECTORS
var colorDisplay = document.getElementById("colorDisplay");  
var messageDisplay = document.querySelector("#message");
var gameHeader = document.querySelector("#gameHeader");
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){

    //MODE BUTTON LISTENERS
    setUpModeButtons();
    //SQUARE LISTENERS
    setUpSquares();
   
    reset();
};


//MODE BUTTON LISTENERS 
function setUpModeButtons(){

    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected"); 
            modeButtons[1].classList.remove("selected"); 
            this.classList.add("selected");  
            totalSquares =  (this.textContent === "EASY") ? 3 : 6;
    
            reset();
        })
    }
}

resetButton.addEventListener("click", function(){
    reset();
});


//RESET BOARD - NEW COLORS
function reset(){
    colors = generateRandomColors(totalSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    gameHeader.style.backgroundColor= "steelblue";
    resetButton.textContent = "NEW COLORS"
    messageDisplay.textContent = "";

    for(var i = 0; i< squares.length; i++){
        if (colors[i]){
            squares[i].style.display= "block";  
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
    }
    for(var i = 0; i< squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    
}

 
 //SQUARE LISTENERS
function setUpSquares(){
    for(var i = 0; i< squares.length; i++){
        squares[i].addEventListener("click", function(){
            //get color of square
            var clickedColor = this.style.backgroundColor;
    
            //compare colors
            if (clickedColor === pickedColor){
                resetButton.textContent ="PLAY AGAIN?";
                messageDisplay.textContent ="CORRECT!";
                changeColor(clickedColor);
                gameHeader.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor= "rgb(35, 35, 35)";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }

}


function changeColor (color){
    //loop thour all sqaures
    for(var i = 0; i< squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
        
    }
}

function pickColor(){
    //select a number between 0-5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var colorArray = [];
    //add num random colors to array
    for(var i=0; i < num; i++){
        colorArray[i]= randomColor();
    }

    return colorArray;
}

function randomColor (){
    //pick a "red" color from 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a "green" color from 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a "blue" color from 0-255
    var blue = Math.floor(Math.random() * 256);

    var completeColor = "rgb(" + red + ", " + green + ", " + blue +")";
    return completeColor;
}
