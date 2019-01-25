class Square extends Shape {

    constructor(options) {
        super(options.x, options.y, options.color);
        this.width = options.width;
        this.height = this.width;
    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveTo(x, y) {

        this.x = x;
        this.y = y;
        this.refresh(); // istrinu visa langa
        this.draw();

    }

    move(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.refresh(); // istrinu visa langa
        this.draw();
    }

}
