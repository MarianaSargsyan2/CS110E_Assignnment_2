//solve the polynomial ax^2 + bx + c = 0
let a = 40;
let b = 16;
let c = 80;
let D = b**2 - 4 * a * c;
if (a === 0){
    let x = -c / b;
    console.log("x = " + x);
} else {
    if ( D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D) / (2 * a));
    console.log ("x1 =" + x1);
    console.log("x2 =" + x2);
} else if (D === 0) {
    let x = -b / (2 * a);
    console.log("x =" + x);
} else {
    console.log("No solution.");
 }
}
