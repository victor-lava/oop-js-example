export var canvas = document.querySelector('#canvas'),
    context = canvas.getContext('2d');

export class Shape {

    constructor(x = 0, y = 0, color = 'red') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    refresh() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    getPosition() {
        return {x: this.x,
                y: this.y,
                width: this.width,
                height: this.height };
    }

}
