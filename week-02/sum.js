function sum(ary) {
  if (ary instanceof Array) {
    let ans = 0;
    ary.map((num) => {
      ans += num;
    });
    return ans;
  } else {
    return "請輸入陣列";
  }
}

//test
console.log(sum([1, 5, 3, 2, 9, -10])); // 10

//挑戰二

//公式解
function sum(num) {
  if (num >= 0) {
    return ((1 + num) * num) / 2;
  } else {
    return "請輸入0或正整數";
  }
}

//遞迴
function sum(num) {
  if (num >= 0) {
    if (num == 1) {
      return 1;
    } else {
      return num + sum(num - 1);
    }
  } else {
    return "請輸入0或正整數";
  }
}
//test
//console.log(sum(12));
