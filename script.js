//For Loops
// for ([initialization]; [condition]; [final-expression]) {}

let ourArray = [];
for (let i = 0; i < 5; i++) {
    if (i > 2) break;
    ourArrray.push(i); 
}
console.log(ourArray);

let arr = [10,9,8,7,6]; 
for(let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
}
//let i = 0 is our initializaiton. i < 5 is our condition.
//if is less than the length of the arrary (arr.length), we are going to continue going through the array. So once we get to the end of the array, we'll be done witht the for loop. At the end we're going to incerement i by 1. 

// nested for loops 
let arr = [
    [1,2], [3,4], [5,6]
];
for (let i = 0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      console.log(arr[1][j]);  
    }

}

//inside the array are 3 other arrays. [1,2] = index o [3,4] = index 1 [5,6] = index 2
//console.log's each item in the array.

//QUESTION(S): What is the purpose of for loops?

//Programming with Mosh

for (initialExpression)
//The first statement is what we would call the inital exepression.
//And here we declare an initialize variable. 
//We use "let" to declare a variable like "i".