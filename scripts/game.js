let egg;
let gif_createImg1, gif_createImg2, gif_createImg3, gif_createImg4;
let bg;
let basket;
let counter = 0;
let start;
let gameOver = false;

function setup() {
    // preload grafical elements
    // they should draw in draw method, otherwise we
    // will not override the ball movement
    gif_createImg1 = createImg("../asset/animated-chicken.gif");
    gif_createImg2 = createImg("../asset/animated-chicken.gif");
    gif_createImg3 = createImg("../asset/animated-chicken.gif");
    gif_createImg4 = createImg("../asset/animated-chicken.gif");
    bg = loadImage("../asset/farm.jpg");
    createCanvas(1000, 730);
    // Create ball object(type, points, startX,startY,Size)

    egg = new Egg("normal", 10, 130, 100, 20, 30);
    basket = new Basket(500, 530, 200, 200);
    basket.setup();
}

function draw() {
    background(bg);
    gif_createImg1.position(80, 30);
    gif_createImg2.position(280, 30);
    gif_createImg3.position(500, 30);
    gif_createImg4.position(700, 30);
    if (start) {
        gameOver = false;
        let hit = collideRectCircle(basket.coordX, basket.coordY, basket.width, basket.height, egg.x, egg.y, egg.w);
        if (hit) {
            counter += egg.points;
        } else if (egg.y >= 700) {
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
    text(counter, 950, 50);
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
    text("Game Over. You have " + counter + " points", 200, 350);
}

function startGame() {
    console.log("game started");
    counter = 0;
    start = true;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
}
