// process.stdout.write() is used to print multiple values on the same line.

// process.stdout.write("hello ");
// process.stdout.write("world ");

// 'prompt-sync' is a package used to take input from the terminal.
// The prompt() method is used in the browser to take user input.

// QUESTION 1

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// solution

// var n = 5;

// for (let i = 1; i <= n; i++){
//   for(let j = 1; j <=n; j++){
//     process.stdout.write(" * ")
//   }
//   console.log()
// };

//  QUESTION 2
// *
// * *
// * * *
// * * * *
// * * * * *

// solution

// var n = 5;

//  for(let i = 1; i<=n; i++){
//   for(let j = 1; j <= i; j++){
//     process.stdout.write(" * ")
//   }
//   console.log()
//  }

// QUESTION 3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// solution

// var n = 5;
// for(let i=1; i <= n; i++){
//   for(let j=1 ;j<=i; j++){
//     process.stdout.write(j + " ")
//   }
//   console.log()
// }

//QUESTION 4

// A
// A B
// A B C
// A B C D
// A B C D E

// solution

// var n = 5;

// for(let i = 1; i<=5;i++){
//   let AsciiValue =  65;
//   for(let j=1; j<=i; j++){
//     process.stdout.write(String.fromCharCode(AsciiValue) + " ");
//     AsciiValue++;
//   }
//   console.log()
// }

//QUESTION 5

// * * * * *
// * * * *
// * * *
// * *
// *

//SOLUTION

// var n = 6;

// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<= n-i+1 ; j++){
//     process.stdout.write(" * ")
//   }
//   console.log()
// };

// QUESTION 6

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// var n = 5
// var s=1

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(s + " ");
//     s++;
//   }
//   console.log();
// }

// QUESTION
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// var n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();

// }

// question
//  *  *  *  *  *
//  *  *  *  *
//  *  *  *
//  *  *
//  *

// var n = 5;
// for(let i = 1; i<=n;i++){
//   for(let j = 1; j<=n-i+1;j++){
//      process.stdout.write(" * ");
//   }
//     console.log()
// }

// QUESTION
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// var n = 4;
// var num = 1;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(num + " ");
//     num++;
//   }
//   console.log();
// }

// question :
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
// var n = 5;

// for (let i = 0; i < n; i++) {
//   for (let j = i+1; j > 0; j--) {
//     process.stdout.write(j+ " ");
//   }
//   console.log();
// }

// question :

var n = 4;

for (let i = 0; i < n + 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    process.stdout.write("  ");
  }
  for(let j = 1 ; j<=i+1;j++){
     process.stdout.write(j +"");
  }
  for(let j=i; j>0;j--){
    process.stdout.write(j +"");
  }
  console.log(i);
}
