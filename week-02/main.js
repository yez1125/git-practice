//因為不支援ES6，所以要轉換成此形式
//const { Stack } = require("./stack.js");
import Stack from "./stack.js";
let stack = new Stack();
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
//基本功能測試
stack.push(5);
stack.push(8);
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
//確認STACK若無內容，是否還會運作
console.log(stack.pop());
console.log(stack.peek());
