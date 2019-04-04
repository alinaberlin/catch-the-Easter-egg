function Basket(coordX, coordY, width, height, limit) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.width = width;
    this.height = height;
    this.setup = function() {
        this.img = loadImage("../asset/basket.png");
    };

    this.display = function() {
        image(this.img, this.coordX, this.coordY, this.width, this.height);
    };

    this.moveLeft = function(pixels) {
        if (this.coordX >= 50) {
            this.coordX -= pixels;
        }
    };

    this.moveRight = function(pixels) {
        if (this.coordX <= limit) {
            this.coordX += pixels;
        }
    };
}
