function calculateArea(length,width=1){
    return length * width;
}
const rectangleArea=calculateArea(10,5);
console.log(`area of 10*5 rectangle is: " ${rectangleArea}"`);
const squareArea=calculateArea(10);
console.log(`area of square with side 10 is: " ${squareArea}"`);
const multiply=(a,b)=>a*b;
//or
console.log(`multiply 10*5 is: " ${multiply(10,5)}`);