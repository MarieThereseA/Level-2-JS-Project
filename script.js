//Variables to keep track of the two cards that were clicked
var card1;
var card2;

var clickCount = 0;
var scoreCount = 0;

//Start & Restart Button
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("restart");

//Card Buttons
const cardbtns = document.getElementsByClassName("image");

//Score Count
const scoreDis = document.getElementById("score");

//Differnt Displays 
const startdisplay = document.getElementsByClassName("rules");
const gamedisplay = document.getElementsByClassName("game");

//Action Listeners
startbtn.addEventListener("click", start);
resetbtn.addEventListener("click", reset);
for (let i = 0 ; i < cardbtns.length; i++){
    let occurence = cardbtns.item(i);
    occurence.addEventListener("click", function(){click(occurence);});
}

function reset(){
    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = true;
    }

    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = false;
    }

    card1 = null;
    card2 = null;
    clickCount = 0;
    scoreCount = 0;

    display();
}

function start(){
    console.log("startbtn clicked!");
    shuffle();

    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = true;
    }

    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = false;
    }

}

function shuffle(){
    // Math.floor(Math.random() * (max - min)) + min;

    console.log("shuffle begins!");

    var element = 1;
    var placed = [];
    var valid = true;
    var card = 0;
    var cards = [["images/Killmonger.webp", "Killmonger"], 
    ["images/M'Baku.webp", "M'Baku"], 
    ["images/Namor.webp", "Namor"], 
    ["images/Okoye.jpeg", "Okoye"], 
    ["images/Ramonda.avif", "Ramonda"], 
    ["images/Shuri.jpg", "Shuri"], 
    ["images/T'Challa.webp", "T'Challa"], 
    ["images/Nakia.avif", "Nakia"]]

    while (placed.length != 16) {
        /* generate random number from 0 - 7 for the cards */
        card = Math.floor(Math.random() * (7)) + 0;

        /* if card is displayed more than twice generate different card # */
        for (let i = 0; i < placed.length; i++){
            if(placed[i] == card){
                for (let j = i; j < placed.length; j++){
                    if(placed[j] == card){
                        valid = false;
                    }
                }

            }
        }

         /* add card # to array of chosen cards */
        placed.push(card);

        const imgElem = document.getElementById(element);
        imgElem.setAttribute("src", cards[card][0]);
        const capElem = document.getElementById("p" + element);
        capElem.innerHTML = cards[card][1];
        element++;
    
    }
}

function click(btn){
    scoreCount++;
    clickCount++;
    display();

    //If two cards are flipped
    if(clickCount == 2){
        card2 = btn;
        //Getting source attributes to check if the two cards are the same character
        let src1 = card1.firstElementChild.firstElementChild.getAttribute("src");

        console.log("Button 1: " + src1);
        let src2 = card2.firstElementChild.firstElementChild.getAttribute("src");
        console.log("Button 2: " + src2);

        if(src1.localeCompare(src2) == 0){
            
        }

        clickCount = 0;
    }else{
        card1 = btn;
        console.log("btn 1 set?: " + card1.getAttribute("class"));
    }
}

//Function to update the score
function display(){
    console.log("display ran! Score= " + scoreCount);
    scoreDis.innerHTML = scoreCount;
}
