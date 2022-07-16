class SetOfStacks {
  constructor(threshold = 5) {
    this.stacks = [];
    this.stacks.push([]);
    this.threshold = threshold;
    this.current = 0;
  }

  push() {
    for (let i = this.current; i < this.stacks.length; i++) {
      if (this.stacks[i].length < this.threshold) {
        this.current = i;
        return this.stacks[i].push("plate");
      }
    }
    this.stacks.push([]);
    this.current++;
    return this.stacks[this.current].push("plate");
  }

  pop() {
    for (let i = this.stacks.length - 1; i >= 0; i--) {
      if (this.stacks[i].length != 0) {
        return this.stacks[i].pop();
      } else {
        this.stacks.pop();
        this.current--;
      }
    }
    return "Error: All stacks are already empty";
  }

  popAt(index) {
    if (index >= this.stacks.length || index < 0) {
      return "Error: Invalid index";
    }
    if (this.stacks[index].length != 0) {
      this.stacks[index].pop();
      if (this.stacks[index].length == 0) {
        if (index < this.current) {
          this.current = index;
        }
      }
      return;
    }
    return "Error: Stack requested is already empty";
  }

  toString() {
    return this.stacks;
  }
}

let plates = new SetOfStacks();
plates.push();
plates.push();
plates.push();
plates.push();
plates.push();
plates.push();
plates.push();
plates.push();
// console.log(plates.toString())
plates.pop();
// console.log(plates.toString())
plates.pop();
plates.pop();
// console.log(plates.toString())
plates.push();
// console.log(plates.toString())
plates.pop();
plates.pop();
// console.log(plates.toString())
plates.push();
plates.push();
plates.push();
plates.push();
// console.log(plates.toString())
plates.popAt(0);
// console.log(plates.toString())
plates.popAt(0);
plates.popAt(0);
plates.popAt(0);
plates.popAt(0);
// console.log(plates.toString())
plates.push();
console.log(plates.toString())
plates.push();
plates.push();
plates.push();
plates.push();
plates.push();
console.log(plates.toString())
