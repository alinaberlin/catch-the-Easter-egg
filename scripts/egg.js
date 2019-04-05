// Chicken positions on horizontal

const colors = ["#cb42f4", "#cb42f4", "#cb42f4", "#cb42f4", "#cb42f4", "#cb42f4", "#cb42f4", "#2d58a8", "#cb42f4", "#45f442"];
//Eggs constructor
function Egg(type, points, tempX, tempY, tempW, tempH, chickenX) {
    this.type = type;
    this.points = points;
    this.x = tempX; // x location of square
    this.y = tempY; // y location of square
    this.w = tempW; // ellipse width
    this.h = tempH; // ellipse height
    this.speed = 4; // speed
    this.gravity = 0;

    this.increaseGravity = function() {
        this.gravity += 0.2;
    };

    this.resetGravity = function() {
        this.gravity = 0;
    };

    this.display = function() {
        colourCode = colors[Math.floor(Math.random() * 10)];
        if (!this.c) {
            this.c = color(colourCode);
            if (colourCode == "#cb42f4") {
                this.points = 1;
            } else if ((colourCode = "#45f442")) {
                this.points = 4;
            } else {
                this.points = 2;
            }
        }
        if (this.y == 100) {
            if (colourCode == "#cb42f4") {
                this.points = 1;
            } else {
                this.points = 2;
            }
            this.c = color(colourCode);
        }
        fill(this.c);
        stroke(this.c);
        ellipse(this.x, this.y, this.w, this.h);
    };

    this.update = function(hit) {
        // Add speed to location

        this.y = this.y + this.speed + this.gravity;

        // If square reaches the bottom
        // Reverse speed
        if (this.y > height || hit) {
            this.y = 100;
            this.x = chickenX[Math.floor(Math.random() * 4)];
            // TODO check if is in the basket
        }
    };

    this.reset = function() {
        this.y = 100;
    };
}
