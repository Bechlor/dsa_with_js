//sum of all elements in an array

let arr = [10,20,30,40,50];
 
let sum = 0;

for(let i = 0; i<arr.length;i++){
  sum += arr[i]
}
console.log(sum,"sum of all element");



// find max number of an array

let arr1 = [10,70,398,40,50];
let max = arr[0]
for(let i = 1; i < arr1.length; i++){
  if(max < arr1[i]){
    max = arr1[i]
  }
}

console.log(max,"maximum element")

// find the min element of an array

let arr2 = [10,70,398,40,50];

let min = arr[0];
for(let i = 0; i < arr2.length;i++){
  if(min > arr2[i]){
    min = arr2[i]
  }
}

console.log(min,"minimum element");

// find the seconds largest element of an array
// CASE 1:
let arr3 = [10,70,98,40,50,30,43,87,90]
let fmax = Math.max(arr3[0],arr3[1]); // 70 98
let smax = Math.min(arr3[0],arr3[1]); // 10 70 87 90

for (let i = 2; i<arr3.length; i++){
  if(fmax < arr3[i]){
    smax = fmax;
    fmax = arr3[i]
  }else if(smax < arr3[i]){
    smax = arr3[i]
  }
}

console.log(smax,"second maximum number of an array")

// CASE 2 :
let arr4 = [10,30,40,40,40,40,40]
let fMax = Math.max(arr4[0],arr4[1]); // 30 40
let sMax = Math.min(arr4[0],arr4[1]); // 10 30 

for (let i = 2; i<arr4.length; i++){
  if(fMax < arr4[i]){
    sMax = fMax;
    fMax = arr4[i]
  }else if(sMax < arr4[i] && fMax != arr4[i]){
    sMax = arr4[i]
  }
}
console.log(sMax,"distinct second maximum value of an array");


// reverse the elements of an array
//  with third variable 
