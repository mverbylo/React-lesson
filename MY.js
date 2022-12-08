/*async await
const fs = require('fs/promises');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000);
// });

// promise
//   .then((resultOfPromise) => {
//     console.log(resultOfPromise);
//     return resultOfPromise ** 2;
//   })
//   .then((data) => {
//     console.log(data);
//     return data + 5;
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function test() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Promise.resolve(50)), 2000);
  });

  const p2 = promise.then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Promise.resolve(50)), 2000);
    });
  });

  const data = await p2;
  console.log(data);
}
// test();

async function logFiles() {
  // fs.readdir(__dirname)
  //   .then((filesArr) => {
  //     const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');
  //     return hiddenFiles;
  //   })
  //   .then((files) => console.log(files));

  const filesArr = await fs.readdir(__dirname);
  const hiddenFiles = filesArr.filter((fileName) => fileName[0] === '.');
  console.log(hiddenFiles);
}

logFiles();
// test().then((data) => console.log(data));
//ошибки
async function test1() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(Promise.reject(50)), 2000);
    });
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log('eroee handler');
  }
}
test1();
// const arr = async () => {};
*/
/*Карирование */
const sunOfThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(sunOfThree(3, 4, 5));

// function curriedSum(num1) {
//   return function inner1(num2) {
//     return function inner2(num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }
const curriedSum = (num1) => (num2) => (num3) => num1 + num2 + num3;

const inner1 = curriedSum(3);
const inner2 = inner1(4);
const res = inner2(5);

const res2 = inner2(10);
console.log(res);
console.log(res2);

function calcCartCost(discount, price, amount) {
  return price * amount - price * amount * discount;
}
console.log(calcCartCost(0.2, 1000, 5));

function curriedCalcCartCost(discount) {
  return function (price) {
    return function (amount) {
      return price * amount - price * amount * discount;
    };
  };
}

// const with20PercentDiscount = curriedCalcCartCost(0.2);
// const withPrice100Andwith20PercentDiscount = with20PercentDiscount(1000);
// const res3 = withPrice100Andwith20PercentDiscount(5);
// console.log(res3);
const res3 = curriedCalcCartCost(0.1)(1000)(5);
console.log(res3);
