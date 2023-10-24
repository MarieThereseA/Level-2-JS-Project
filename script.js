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
    var img = 0;
    var file = 0;
    var nums = [];
    var valid = true;
    var cards = ["images/Killmonger.webp", "images/M'Baku.webp", "images/Namor.webp", "images/Okoye.jpeg", "images/Ramonda.avif", "images/Shuri.jpg", "images/T'Challa.webp"]

    while (nums.length != 16) {
        img = Math.floor(Math.random() * (7)) + 1;

         for (let i = 0; i < nums.length; i++){
            if(nums[i] == img){
                for (let j = i; j < nums.length; j++){
                    if(nums[j] == img){
                        valid = false;
                    }
                }

            }
         }

         file = Math.floor(Math.random() * (max - min)) + min;
         if (ran == 1){
            
         }else if (ran == 2){

         }else if (ran == 2){
            
         }else if (ran == 3){
            
         }else if (ran == 4){
            
         }else if (ran == 5){
            
         }else if (ran == 6){
            
         }else if (ran == 7){

         }else {

         }
    }
}
