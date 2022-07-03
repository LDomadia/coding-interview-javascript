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

function partition(list, value) {
  let p1 = list.head;
  while (p1.data < value) {
    p1 = p1.next;
  }

  let p2 = p1.next;
  while (p2 != null) {
    if (p2.data < value) {
      let temp = p1.data;
      p1.data = p2.data;
      p2.data = temp;
      p1 = p1.next;
    }
    p2 = p2.next;
  }
}

let list = new LinkedList();
list.appendToTail(3);
list.appendToTail(5);
list.appendToTail(8);
list.appendToTail(5);
list.appendToTail(10);
list.appendToTail(2);
list.appendToTail(1);

console.log(list.toString());
partition(list, 5);
console.log(list.toString());

let list2 = new LinkedList();
list2.appendToTail(9);
list2.appendToTail(5);
list2.appendToTail(8);
list2.appendToTail(3);
list2.appendToTail(10);
list2.appendToTail(2);
list2.appendToTail(1);

console.log(list2.toString());
partition(list2, 5);
console.log(list2.toString());
