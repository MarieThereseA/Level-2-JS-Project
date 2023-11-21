//Variables to keep track of the two cards that were clicked
var card1;
var card2;

var clickCount = 0;
var scoreCount = 0;

//All the cards required for the game
const cards = [["images/Killmonger.jpg", "Killmonger"], 
    ["images/M'Baku.jpeg", "M'Baku"], 
    ["images/Namor.jpg", "Namor"], 
    ["images/Okoye.jpg", "Okoye"], 
    ["images/Ramonda.jpeg", "Ramonda"], 
    ["images/Shuri.jpg", "Shuri"], 
    ["images/T'Challa.jpg", "T'Challa"], 
    ["images/Nakia.jpeg", "Nakia"]];

//Variable to keep track of which cards are placed where
var placed = [];

//Source for face down card png
const facedown = "images/FaceDown.png";

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
    /*
    console.log("reset");
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
    placed = [];

    scoreDis.innerHTML = scoreCount;
    const allcards = document.getElementsByClassName("polaroid");
    for (i of allcards) {
        i.firstElementChild.setAttribute("src", facedown);
        i.lastElementChild.innerHTML = "";
    }
    */
   location.reload();
}

function start(){
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
    var valid = true;
    var card = 0;
    var found = 0;
    var tempcards = cards;
    
    while (placed.length != 16) {
        /* generate random number from 0 - 7 for the cards */
        index = Math.floor(Math.random() * (tempcards.length)) + 0;
        card = tempcards[index];
        found = 0;

        /* if card is displayed more than twice generate different card # */
        for (let i = 0; i < placed.length; i++){
            if (placed[i] != null){
                if(placed[i][1].localeCompare(card[1]) == 0){
                    found++;
                }

            }
        }

        if (found >= 2){
            valid = false;
            tempcards.splice(index,1);
        }

        while (!valid){
            index = Math.floor(Math.random() * (tempcards.length)) + 0;
            valid = true;
            found = 0;
            card = cards[index];

            for (let i = 0; i < placed.length; i++){
                if (placed[i] != null){
                    if(placed[i][1].localeCompare(card[1]) == 0){
                        found++;
                    }
                }
            }
            if (found >= 2){
                tempcards.splice(index,1);
                valid = false;
            }

        }

         /* add card info to array of placed cards */
        placed.push(card);
    
    }
    console.info(placed);
}

function click(btn){
    scoreCount++;
    clickCount++;

    //If two cards are flipped
    if(clickCount == 2){
        card2 = btn.firstElementChild;
        display();
        compare();
        clickCount = 0;
    }else{
        card1 = btn.firstElementChild;
    }

    console.log("click count: "+ clickCount);
    display(); 
}

//Function to compare the two cards
function compare(){
    //Getting source attributes to check if the two cards are the same character
    let src1 = card1.firstElementChild.getAttribute("src");
    console.log("Button 1: " + src1);

    let src2 = card2.firstElementChild.getAttribute("src");
    console.log("Button 2: " + src2);

    if(src1.localeCompare(src2) == 0){
        card1.parentElement.disabled = true;
        card2.parentElement.disabled = true;
    }else {
        var flipped = [];
        for (let i = 0 ; i < cardbtns.length; i++){
            let occurence = cardbtns.item(i);
            if (occurence.disabled != true){
                flipped.push(occurence);
                if (occurence != card1.parentElement || occurence != card2.parentElement){
                    occurence.disabled = true;
                }
            }
        }

        sleep(1500).then(() => {
            card1.firstElementChild.setAttribute("src", facedown);
            card2.firstElementChild.setAttribute("src", facedown);
    
            card1.lastElementChild.innerHTML = "";
            card2.lastElementChild.innerHTML = "";

            for (let i = 0; i < flipped.length; i++){
                flipped[i].disabled = false;
            }
        });
    
    }
    if (src1.localeCompare(src2) != 0){
        sleep(1500).then(() => {
            console.log("sleep");
            card1 = null;
            card2 = null;
        });
    }
}

//Function to update the score
function display(){

    if (clickCount == 1 && card1 != null ){
        index1 = card1.firstElementChild.getAttribute("id");
        
        card1.firstElementChild.setAttribute("src", placed[index1][0]);
        card1.lastElementChild.innerHTML = placed[index1][1];
    }else{
        if (card2 != null){
            index2 = card2.firstElementChild.getAttribute("id");
    
            card2.firstElementChild.setAttribute("src", placed[index2][0]);
            card2.lastElementChild.innerHTML = placed[index2][1];
        }
    }
    scoreDis.innerHTML = scoreCount;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

