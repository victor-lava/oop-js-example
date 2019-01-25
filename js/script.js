var square = new Square({   x: 50,
                            y: 150,
                            width: 50,
                            color: 'black'}),
    rectangle = new Rectangle({ x: 5,
                                y: 5,
                                width: 100,
                                height: 50,
                                color: 'blue'});


var i = 1;
setInterval(function() {
    // triangle = new Triangle({ coordinates: [{x: Canvas.getRandom(-4,4), y:Canvas.getRandom(-4,4)},
    //                                         {x: Canvas.getRandom(120,125), y: Canvas.getRandom(120,125)},
    //                                         {x: Canvas.getRandom(-214,525), y: Canvas.getRandom(288,144)}],
    //                           color: 'red'});
    //                           triangle.refresh();
    // triangle.draw();
    // square.move(Canvas.getRandom(-4,4), Canvas.getRandom(-4,4));
    i++;
}, 1);
//
// let formos = [];
//
// for(var i = 0; i < 10; i++) {
//     formos[i] = new Square({x: Canvas.getRandom(0,600),
//                              y: Canvas.getRandom(0,600),
//                              width: Canvas.getRandom(50,100),
//                              color: 'rgba(' + Canvas.getRandom(0,255) +
//                                          ',' + Canvas.getRandom(0,255) +
//                                          ',' + Canvas.getRandom(0,255) + ',' + Math.random() + ')'});
//     formos[i].draw();
//
//     formos[i] = new Rectangle({x: Canvas.getRandom(0,600),
//                               y: Canvas.getRandom(0,600),
//                               width: Canvas.getRandom(25,50),
//                               height: Canvas.getRandom(75,100),
//                               color: 'rgba(' + Canvas.getRandom(0,255) +
//                                           ',' + Canvas.getRandom(0,255) +
//                                           ',' + Canvas.getRandom(0,255) + ',' + Math.random() + ')'});
//     formos[i].draw();
// }

// square.draw();
triangle.draw();
