import { Square } from "../classes/Square.class.js";
export class Rectangle extends Square {

    constructor(options) {
        super(options);
        this.height = options.height;
    }


}
