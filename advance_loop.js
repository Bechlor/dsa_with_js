//rotate left by 1 index
let arr = [10, 11, 12, 13, 14, 15];
let copy = arr[0];

for (let i = 1; i < arr.length; i++) { 
  arr[i-1] = arr[i];
}

arr[arr.length - 1] = copy;

console.log(arr)

