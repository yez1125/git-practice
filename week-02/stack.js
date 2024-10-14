export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  //#代表後面所接變數只供這個class使用，外部的程式不論如何都無法使用
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) {
      return "stack has been empty";
    } else {
      return this.#items.pop();
    }
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO

    if (this.isEmpty()) {
      return "stack has been empty";
    } else {
      return this.#items[this.#items.length - 1];
    }
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    let content = "";
    this.#items.map((value) => {
      content += value + " ";
    });
    console.log(content.trim());
  }
}

//module.exports = { Stack };
//因為不支援ES6，所以要轉換成此形式
