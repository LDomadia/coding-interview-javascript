class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    if (this.stack.length == 0 || this.stack[this.stack.length - 1].min >= value) {
      this.stack.push({'value': value, 'min': value});
    }
    else {
      this.stack.push({'value': value, 'min': this.stack[this.stack.length - 1].min});
    }
    
  }

  pop() {
    if (this.stack.length == 0) {
      return 'Error: Stack is empty';
    }
    return this.stack.pop().value;
  }

  min() {
    return this.stack[this.stack.length - 1].min
  }
}

let myStack = new Stack();
myStack.push(3);
myStack.push(4);
myStack.push(6);
myStack.push(2);
myStack.push(7);
myStack.push(1);
myStack.push(8);
console.log(myStack.min());
myStack.pop();
myStack.pop();
console.log(myStack.min());
myStack.pop();
myStack.pop();
console.log(myStack.min());

