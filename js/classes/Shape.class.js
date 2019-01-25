class Shape extends Canvas {

    constructor(x = 0, y = 0, color = 'red') {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
    }

    refresh() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getPosition() {
        return {x: this.x,
                y: this.y,
                width: this.width,
                height: this.height };
    }

}
