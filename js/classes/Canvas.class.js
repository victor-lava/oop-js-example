class Canvas {

    constructor() {
        this.canvas = document.querySelector('#canvas');
        this.context = canvas.getContext('2d');
    }

    static getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

}
