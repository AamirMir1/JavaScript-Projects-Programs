// Initializing Constants & Variables 


const foodSound = new Audio('./sounds/food.mp4')
const moveSound = new Audio('./sounds/move.mp4')
const gameOverSound = new Audio('./sounds/gameover.mp4')
const music = new Audio('./sounds/music.mp4')
let board = document.querySelector('.board')

let inputDir = { x: 0, y: 0 }   // Initializing input directions of snake  
let snakeArr = [{ x: 6, y: 13 }]   // Initializing the location of the snake head
let food = { x: 15, y: 18 }   // Initializing the location of the food
let Score = document.getElementById('score')
let highScore = document.getElementById('highScore')
let speed = 8
let score = 0
let lastPaintTime = 0

// Store High Score In Local Storage

let hiscore = localStorage.getItem('hiscore')
let hiscoreVal;
if (hiscore === null) {
    hiscoreVal = 0
    localStorage.setItem('hiscore', JSON.stringify(hiscoreVal))
} else {
    hiscoreVal = JSON.parse(hiscore)
    highScore.innerHTML = "High Score " + hiscore
}

// Game Functions
function main(currentTime) {
    window.requestAnimationFrame(main)
    if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    // console.log(currentTime)
    lastPaintTime = currentTime;
    gameEngine()
}
function isGameOver(snake) {
    // If you bump your self

    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true
        }
    }

    // if you bump into the wall

    if (snake[0].x > 21 || snake[0].x <= 0 || snake[0].y > 21 || snake[0].y <= 0) {
        return true
    }
}

function gameEngine() {
    // Part 1: Updating The Snake Array & Food

    if (isGameOver(snakeArr)) {    // On gameover then what
        music.pause()   // Pause the background music on gameover
        gameOverSound.play()   // Play the gameover music on gameover
        inputDir = { x: 0, y: 0 }   // Resetting the input direction on gameover
        alert("Game Over! Please press any key to play again")   // Showing alert on gameover
        snakeArr = [{ x: 6, y: 13 }]  // Resetting the snake location on gameover after alert
        music.currentTime = music.duration
        music.play()   // Playing background music after alert
        score = 0  // Resetting score on gameover after alert
    }

    // If you have eaten the food, increment the score and regenerate the food

    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) { /* If the location of food 
                                                            and snake are match then do this*/

        // if the snake eaten the food then make the snake bigger by incrementing a body part in it
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })

        // Regenerate the food in random locations after eaten

        let a = 1;    // Generating the numbers from 1 to 21
        let b = 21;    // Genereating the numbers from 1 to 21

        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        score = score += 1
        Score.innerHTML = "Score: " + score
        if(score > 20){
            speed = 10
        }
        else if(score>40){
            speed = 11
        }
        else if(score> 60){
            speed = 12
        }
        else if(score>100){
            speed = 13
        }
        if (score > hiscoreVal){
            hiscoreVal = score
            localStorage.setItem('hiscore', JSON.stringify(hiscoreVal))
            highScore.innerHTML = "High Score "+ hiscoreVal
        }

    }

    // Moving the snake  

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        // const element = snakeArr[i];
        snakeArr[i + 1] = { ...snakeArr[i] }
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y

    // Part 2: Display The Snake And Food

    // Display Snake___

    board.innerHTML = ""
    snakeArr.forEach((element, index) => {
        let snakeElement = document.createElement('div')  // Create a snake to append in board
        snakeElement.style.gridRowStart = element.y // Setting the location of the snake
        snakeElement.style.gridColumnStart = element.x  // Setting the location of the snake
        board.appendChild(snakeElement)  // Adding the snake in board where the snake can move
        if (index === 0) {  // if the index of snakeArr is 0 then the head class will be apply
            snakeElement.classList.add('head')  // Adding the CSS for snake 
        } else {
            snakeElement.classList.add('snake')  // Adding the CSS for snake
        }
    })

    // Display Food

    let foodElement = document.createElement('div')  // Create food to append in board
    foodElement.style.gridRowStart = food.y   // Setting the location of the food in board
    foodElement.style.gridColumnStart = food.x  // Setting the location of the food in board
    foodElement.classList.add('food')  // Adding the CSS for food
    board.appendChild(foodElement)  // Adding the food in board

}


// Main Logic Start Here
window.requestAnimationFrame(main)     // Creating Game Loop Using requestAnimationFrame()

window.addEventListener('keydown', (e) => { // Changing the inputDir on key press
    inputDir = { x: 0, y: 1 }    // Start the game of keypress
    music.play()        // Play background music on keypress
    // moveSound.play()     // Play move sound on keypress
    switch (e.key) {
        case "ArrowUp":  // Changing the input direction on ArrowUp
            inputDir.x = 0
            inputDir.y = -1

            break;
        case "ArrowDown":  // Changing the input direction on ArrowDown
            inputDir.x = 0
            inputDir.y = 1
            break;
        case "ArrowLeft":  // Changing the input direction on ArrowLeft
            inputDir.x = -1
            inputDir.y = 0

            break;
        case "ArrowRight":  // Changing the input direction on ArrowRight
            inputDir.x = 1
            inputDir.y = 0
            break;

        default:

            break;
    }
})
