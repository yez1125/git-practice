function fib(n) {
  if (n < 0) {
    //不接受負數
    return "請輸入正整數或0";
  } else if (n == 0) {
    //輸入小於等於0的值直接回傳0
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    /*遞迴*/
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(10000));

/*測試資料
console.log(fib(-1)); 
fib(1); // 1
fib(5); // 5
fib(10); // 55
*/
