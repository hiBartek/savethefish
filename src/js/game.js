// var
let score = 0; // wynik
let bestScore = 0; // Najlepszy wynik
const scoreText = document.getElementById("scoreText"); // score text
const heart = document.getElementById("heart"); // heart text
let startHealth = 3; // początkowe zdrowie
let health = startHealth; // Zdrowie 
let speedTime = 1500; // czas spawnu
let live = false; // Czy gra jest rozpoczeta

// Click fish
const all_fish = document.querySelectorAll(".fish"); // Wszystkie ryby
all_fish.forEach(element => {
    element.addEventListener("click", function(){
        health--;
        heart.innerHTML = health;

        if(health <= 0){
            endGame();
        }
    })
})

// hi
const blurbg = document.querySelector(".blurbg");
const hi = document.querySelector(".hi");
const startgamebtn = document.querySelector(".startgamebtn");

// Play game
startgamebtn.addEventListener("click", function(){
    live = true;
    score = 0;
    health = startHealth;
    heart.innerHTML = startHealth;
    hi.classList.add("active");
    blurbg.classList.add("active");
    scoreText.innerHTML = 0;
    heart.style.display = "block";
    document.querySelector(".scoreBorder").style.display = "flex"; // Wyświetlenie scoreBorder

    // show fish
    document.querySelectorAll(".fish").forEach(element => {
        element.style.display = "block";
    })

    // remove menu after starting the game
    setTimeout(function(){
        hi.style.display = "none";
        blurbg.style.display = "none";

        spawnBags(); // rozpoczęcie spawn smieci
    }, 1000);
})

// speaker
const speaker = document.querySelector(".speaker");
const musicGame = document.getElementById("musicGame");
musicGame_isPlay = false;

speaker.addEventListener("click", function(){
    if(musicGame_isPlay == false){
        musicGame.play();
        musicGame_isPlay = true;
        speaker.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    else{
        musicGame.pause();
        musicGame_isPlay = false;
        speaker.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
})

// maps
const maps = document.querySelectorAll(".mapImg");
maps.forEach(element => {
    element.addEventListener("click", function(){
        document.body.style.backgroundImage = 'url('+ element.src +')';
    })
})

setInterval(function(){
   if(live == true){
        // remove bag on click 
        all_bags = document.querySelectorAll(".bags");
        all_bags.forEach(element => {
            element.addEventListener("click", function(){
                element.remove();
            });

    });

    // remove the bags after the animation is over
    all_bags.forEach(element => {
        element.addEventListener("animationend",function(){
            endGame();
        })
    })

    // change the spawn speed
    switch (score){
        case 3:
            speedTime = 1000;
        break;

        case 10: 
            speedTime = 900;
        break;

        case 20: 
            speedTime = 850;
        break;

        case 25: 
            speedTime = 800;
        break;

        case 30: 
            speedTime = 650;
        break;

        case 35: 
            speedTime = 560;
        break;

        case 40: 
            speedTime = 500;
        break;

        case 100: 
            speedTime = 490;
        break;

        case 150: 
            speedTime = 460;
        break;

        case 200: 
            speedTime = 400;
        break;
    }
   }
})