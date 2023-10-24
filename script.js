//Start & Restart Button
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("restart");

//Differnt Displays 
const startdisplay = document.getElementsByClassName("rules");
const gamedisplay = document.getElementsByClassName("game");

//Action Listeners
startbtn.addEventListener("click", start);
resetbtn.addEventListener("click", reset);

function reset(){
    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = true;
    }

    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = false;
    }
}

function start(){
    console.log("startbtn clicked!");
    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = true;
    }

    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = false;
    }


}

function shuffle(){
    // Math.floor(Math.random() * (max - min)) + min;
    var ran = 0;
    var cards = [];
    var valid = true;

    while (cards.length != 16) {
        var ran = Math.floor(Math.random() * (7)) + 1;

         for (int i = 0; i < cards.length; i++){
            if(cards[i] == )
         }
}
