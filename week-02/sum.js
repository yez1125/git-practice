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
