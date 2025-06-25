//sum of all elements in an array

let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum, "sum of all element");

// find max number of an array

let arr1 = [10, 70, 398, 40, 50];
let max = arr[0];
for (let i = 1; i < arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
  }
}

console.log(max, "maximum element");

// find the min element of an array

let arr2 = [10, 70, 398, 40, 50];

let min = arr[0];
for (let i = 0; i < arr2.length; i++) {
  if (min > arr2[i]) {
    min = arr2[i];
  }
}

console.log(min, "minimum element");

// find the seconds largest element of an array
// CASE 1:
let arr3 = [10, 70, 98, 40, 50, 30, 43, 87, 90];
let fmax = Math.max(arr3[0], arr3[1]); // 70 98
let smax = Math.min(arr3[0], arr3[1]); // 10 70 87 90

for (let i = 2; i < arr3.length; i++) {
  if (fmax < arr3[i]) {
    smax = fmax;
    fmax = arr3[i];
  } else if (smax < arr3[i]) {
    smax = arr3[i];
  }
}

console.log(smax, "second maximum number of an array");

// CASE 2 :
let arr4 = [10, 30, 40, 40, 40, 40, 40];
let fMax = Math.max(arr4[0], arr4[1]); // 30 40
let sMax = Math.min(arr4[0], arr4[1]); // 10 30

for (let i = 2; i < arr4.length; i++) {
  if (fMax < arr4[i]) {
    sMax = fMax;
    fMax = arr4[i];
  } else if (sMax < arr4[i] && fMax != arr4[i]) {
    sMax = arr4[i];
  }
}
console.log(sMax, "distinct second maximum value of an array");

// reverse the elements of an array
//  with third variable
let arr5 = [10, 20, 30, 40, 60, 25, 90];
let start = 0;
let end = arr5.length - 1;
while (start < end) {
  let temp = arr5[start];
  arr5[start] = arr5[end];
  arr5[end] = temp;

  start++;
  end--;
}

console.log(arr5);

// check if the array is sorted if yes return true else false

let arr6 = [21, 23, 24, 65, 73, 76];

function isSorted(arr6) {
  for (let i = 1; i < arr6.length; i++) {
    if (arr6[i - 1] > arr6[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted(arr6));


// shift zeros elements are in left and once in right

let arr7 = [1,0,0,1,1,0,0,1,0];
let i = 0;
let j = 0;

while(i < arr7.length){
  if(arr7[i] == 0){
    let temp = arr7[i];
    arr7[i] = arr7[j]
    arr7[j] = temp;
    j++
  }
  i++
}
console.log(arr7,"shift zeros to left and once to right")

// shift zeros elements are in right and once in left

let arr8 = [1,0,0,1,1,0,0,1,0];
let I = 0;
let J = 0;
 while(I < arr8.length){
  if(I == 1){
    let temp = arr8[I]
    arr8[I] = arr8[J];
    arr8[J] = temp;
    I++
  }
  j++

 }

 console.log(arr8,"regf")

