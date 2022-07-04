class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendToTail(data) {
    let end = new Node(data);
    let n = this.head;
    if (n == null) {
      this.head = end;
    } else {
      while (n.next != null) {
        n = n.next;
      }
      n.next = end;
    }
  }

  toString() {
    let string = ""
    let current = this.head;
    while (current != null) {
      string += current.data.toString() + " ";
      current = current.next;
    }
    return string;
  }
}

function palindrome(list) {
  let p1 = list.head;
  let p2 = list.head;
  let nums = [];
  let length = 0;
  while (p2 != null) {
    nums.push(p1.data);
    p1 = p1.next;
    if (p2.next != null) {
      p2 = p2.next.next;
      length += 2;
    }
    else {
      p2 = p2.next;
      length += 1;
    }
  }
  
  if (length % 2 != 0) {
    nums.pop();
  }
  while (nums.length != 0 && p1 != null) {
    if (p1.data != nums.pop()) {
      return false;
    }
    p1 = p1.next;
  }
  return true;
}

let num1 = new LinkedList();
num1.appendToTail(1);
num1.appendToTail(2);
num1.appendToTail(3);
num1.appendToTail(3);
num1.appendToTail(2);
num1.appendToTail(1);
console.log(palindrome(num1));
