let x1 = 4;
let y1 = 1;
let x2 = 8;
let y2 = 5;
let lineLength = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
if (x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0){
    console.log("The coordinates are not in the same quadrant.");
} else{
    console.log (lineLength);
}
