class Triangle extends Shape {

    constructor(options) {
        super(null, null, options.color);
        this.coordinates = options.coordinates;
    }

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.coordinates[0].x, this.coordinates[0].y);
        this.context.lineTo(this.coordinates[1].x, this.coordinates[1].y);
        this.context.lineTo(this.coordinates[2].x, this.coordinates[2].y);
        this.context.fillStyle = this.color;
        this.context.fill();
    }


}
