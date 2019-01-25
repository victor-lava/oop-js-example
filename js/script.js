function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var square = new Square({x: 50,
                         y: 150,
                         width: 50,
                         color: 'black'}),

    rectangle = new Rectangle({ x: 5,
                            y: 5,
                            width: 100,
                            height: 50,
                            color: 'blue'});



square.draw();

var i = 1;
setInterval(function() {
    square.move(i, 0);
    i++;
}, 10);

// square.draw();
// window.requestAnimationFrame(square.move(10,0));
// square.draw();
// var formos = [];
//
// for(var i = 0; i < 10; i++) {
//     formos[i] = new Square({x: getRandom(0,600),
//                              y: getRandom(0,600),
//                              width: getRandom(50,100),
//                              color: 'rgba(' + getRandom(0,255) +
//                                          ',' + getRandom(0,255) +
//                                          ',' + getRandom(0,255) + ',' + Math.random() + ')'});
//     formos[i].draw();
//
//     formos[i] = new Rectangle({x: getRandom(0,600),
//                               y: getRandom(0,600),
//                               width: getRandom(25,50),
//                               height: getRandom(75,100),
//                               color: 'rgba(' + getRandom(0,255) +
//                                           ',' + getRandom(0,255) +
//                                           ',' + getRandom(0,255) + ',' + Math.random() + ')'});
//     formos[i].draw();
// }


// console.log(rectangle);
