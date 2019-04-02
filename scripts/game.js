let egg;
let gif_createImg1, gif_createImg2, gif_createImg3, gif_createImg4;
let bg;
let basket;
let counter = 0;

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
    egg.display();
    basket.display();
    let hit = collideRectCircle(basket.coordX, basket.coordY, basket.width, basket.height, egg.x, egg.y, egg.w);
    if (hit) {
        counter += 1;
    }
    egg.update(hit);

    textSize(32);
    fill(0, 102, 153);
    text(counter, 950, 50);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        basket.moveLeft(50);
    }
    if (keyCode === RIGHT_ARROW) {
        basket.moveRight(50);
    }
}
