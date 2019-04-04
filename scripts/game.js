let egg;
let gif_createImg1, gif_createImg2, gif_createImg3, gif_createImg4, gameOverGif;
let bg;
let basket;
let counter = 0;
let start;
let gameOver = false;

function setup() {

    bg = loadImage("../asset/farm.jpg");
    createCanvas(windowWidth, windowHeight);
    egg = new Egg("normal", 10, windowWidth / 6 + 50, 100, 20, 30, [windowWidth / 6 + 50, (windowWidth / 6) * 2 + 50, (windowWidth / 6) * 3 + 50, (windowWidth / 6) * 4 + 50]);
    basket = new Basket(windowWidth / 2 - 200, windowHeight - 200, 200, 200, windowWidth - 250);
    basket.setup();
}

function draw() {
    background(bg);
    if (start) {
        gameOverGif = undefined;
        gameOver = false;
        let hit = collideRectCircle(basket.coordX, basket.coordY, basket.width, basket.height, egg.x, egg.y, egg.w);
        if (hit) {
            counter += egg.points;
        } else if (egg.y >= windowHeight - 100) {
            console.log("game ended");
            start = false;
            document.getElementById("start").style.visibility = "visible";
            gameOver = true;
            displayGameOver();
            egg.reset();
        }
        egg.update(hit);
        egg.display();
        basket.display();
    }
    if (gameOver) {
        displayGameOver();
    }
    textSize(42);
    fill(0, 102, 153);
    text(counter, windowWidth - 50, 50);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        basket.moveLeft(80);
    }
    if (keyCode === RIGHT_ARROW) {
        basket.moveRight(80);
    }
}

function displayGameOver() {
    textSize(48);
    fill(0, 102, 153);
    textAlign(CENTER);
    text("Game Over. You have " + counter + " points", windowWidth / 2, 300);
    gameOverGif = createImg("../asset/game-over.gif")
    gameOverGif.position(windowWidth / 2 - 100, windowHeight / 2 - 100);
    gif_createImg1 = undefined;
    gif_createImg2 = undefined;
    gif_createImg3 = undefined;
    gif_createImg4 = undefined;
    egg.resetGravity();
}

function startGame() {
    console.log("game started");
    counter = 0;
    start = true;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    gif_createImg1 = createImg("../asset/animated-chicken.gif");
    gif_createImg2 = createImg("../asset/animated-chicken.gif");
    gif_createImg3 = createImg("../asset/animated-chicken.gif");
    gif_createImg4 = createImg("../asset/animated-chicken.gif");
    gif_createImg1.position(windowWidth / 6, 30);
    gif_createImg2.position((windowWidth / 6) * 2, 30);
    gif_createImg3.position((windowWidth / 6) * 3, 30);
    gif_createImg4.position((windowWidth / 6) * 4, 30);
    setInterval(() => egg.increaseGravity(), 1000);
}
