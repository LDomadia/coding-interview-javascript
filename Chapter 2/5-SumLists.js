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

function sumLists(num1, num2) {
  let p1 = num1.head;
  let p2 = num2.head;
  let carryover = 0;
  let sumList = new LinkedList();

  while (p1 != null || p2 != null) {
    let sum = 0;
    if (p1 != null) {
      sum += p1.data;
      p1 = p1.next;
    }
    if (p2 != null) {
      sum += p2.data;
      p2 = p2.next;
    }
    sum += carryover;
    sumList.appendToTail(sum % 10);
    carryover = Math.floor(sum / 10);
  }

  if (carryover != 0) {
    sumList.appendToTail(carryover);
  }
  return sumList;
}

// need to fix, returns the sum in reverse order
function sumListsRecursive(node1, node2, carryover) {
  if (node1 == null && node2 == null) {
    if (carryover != 0) {
      return new LinkedList(new Node(carryover));
    }
    return new LinkedList();
  }
  else if (node1 == null) {
    node1 = new Node(0);
  }
  else if (node2 == null) {
    node2 = new Node(0);
  }

  let sum = node1.data + node2.data + carryover;
  carryover = Math.floor(sum / 10);
  let list = sumListsRecursive(node1.next, node2.next, carryover);
  list.appendToTail(sum % 10);
  return list;
}

let num1 = new LinkedList();
num1.appendToTail(9);
num1.appendToTail(7);
num1.appendToTail(8);
let num2 = new LinkedList();
num2.appendToTail(6);
num2.appendToTail(8);
num2.appendToTail(5);

console.log(sumLists(num1, num2).toString());
console.log(sumListsRecursive(num2.head, num1.head, 0).toString());

let num3 = new LinkedList();
num3.appendToTail(9);
num3.appendToTail(9);
let num4 = new LinkedList();
num4.appendToTail(9);
num4.appendToTail(9);
num4.appendToTail(9);
num4.appendToTail(9);

console.log(sumLists(num3, num4).toString());
console.log(sumLists(num4, num3).toString());
