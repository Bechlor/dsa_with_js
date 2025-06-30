// rotate one step left the elements if an array

var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var copy = arr[0];

for (let i = 1; i < arr.length; i++) {
  arr[i - 1] = arr[i];
}

arr[arr.length - 1] = copy;
console.log(arr);

// Rotate one step  right side the elements of an array;

var arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var copy = arr2[arr2.length - 1];

for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1];
}
arr2[0] = copy;
console.log(arr2);

// // nested looping
// for(let i = 1; i <4; i++){
//   console.log("parent Hello --")
//   for(let j = 1; j<= 2; j++){
//     console.log("child loop")
//   }
// }

// left rotate the element of an array k times

let a = [1, 2, 3, 4, 5, 6, 7, 8];
let times = 2;
times = times % a.length; // handle to run unneccessary steps 
for (let j = 0; j < times; j++) {
  let copyElem = a[0];
  for (let i = 1; i < a.length; i++) {
    a[i - 1] = a[i];
  }

  a[a.length - 1] = copyElem;
}

console.log(a);
