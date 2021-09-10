// spawn bagas
const all_bags_img = ['puszka.png', 'kawa.png', 'torba.png', 'jablko.png', 'butelka.png'];
const all_bags_img_l = all_bags_img.length; // ilosc przedmiotow

function spawnBags(){
    if(live == true){
        bags = document.createElement("DIV"); // create div
        bags.innerHTML = '<img src="./src/image/' + all_bags_img[Math.floor(Math.random() * all_bags_img_l)] + '">';    // dodanie grafiki do diva
        bags.classList.add("bags"); // add bags class to div
        document.body.appendChild(bags); // append bagas 
        locationX = Math.round((Math.random() * window.innerWidth + 1) - 60); // position w X
        if(locationX < 60) locationX = 20;
        bags.style.left = locationX + "px"; // set position
    
        // update score on click
        bags.addEventListener("click",function(){
            updateScore();      
        })
    
        setTimeout(spawnBags, speedTime);
    }
}

// Update score
function updateScore(){
    score++;
    scoreText.innerHTML = score;
}

// Remove all bags in game
function killAllBugs(){
    document.querySelectorAll(".bags").forEach(element => {
        element.remove();
    });
}

// Set best score
function setBestScore(){
    if(bestScore < score){
        bestScore = score;
    }
    scoreText.innerHTML = "Current score: <b>" + score + "</b> <br> Best score: <b>" + bestScore + "</b>";  
}

// end game
function endGame(){
    live = false;
    setBestScore();
    killAllBugs();
    hi.style.display = "block";
    blurbg.style.display = "block";
    hi.classList.remove("active");
    blurbg.classList.remove("active");
    heart.style.display = "none";
    
    document.querySelectorAll(".fish").forEach(element => {
        element.style.display = "none";
    })
}