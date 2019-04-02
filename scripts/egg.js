// Chicken positions on horizontal
const chickenX = [130, 330, 550, 750];

//Eggs constructor
function Egg(type, points, tempX, tempY, tempW, tempH) {
    this.type = type;
    this.points = points;
    this.x = tempX; // x location of square
    this.y = tempY; // y location of square
    this.w = tempW; // ellipse width
    this.h = tempH; // ellipse height
    this.speed = 4; // speed

    this.display = function() {
        // Display the square
        fill(200);
        stroke(100);
        ellipse(this.x, this.y, this.w, this.h);
    };

    this.update = function() {
        // Add speed to location
        this.y = this.y + this.speed;

        // If square reaches the bottom
        // Reverse speed
        if (this.y > height) {
            this.y = 100;
            this.x = chickenX[Math.floor(Math.random() * 3)];
            // TODO check if is in the basket
        }
    };
}
