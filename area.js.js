let triangleBase = 22;
let triangleHeight = 13;
let triangleArea = triangleBase * triangleHeight / 2;
let rectangleBase = 20;
let rectangleHeight = 19;
let rectangleArea = rectangleBase * rectangleHeight;
if (triangleBase <= 0 || triangleHeight <= 0 || rectangleBase <= 0 || rectangleHeight <= 0){
    console.log("The areas cannot be calculated.");
} else{
    if (triangleArea > rectangleArea){
        console.log("The triangle has a bigger area.");
    } else if (triangleArea < rectangleArea){
        console.log("The rectangle has a bigger area."); 
    } else {
        console.log("The areas are equal");
    }
        
}