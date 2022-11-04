class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
  static mult = (...numbers) => numbers.reduce((acc, num) => acc * num);
  static minus = (...numbers) => numbers.reduce((acc, num) => acc - num);
}

//ComonJS exporting
module.exports.add = MyMath.sum;
module.exports.myMath = MyMath;
