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

function removeDups(list) {
  let repeats = new Set();
  let previous = null;
  let current = list.head;
  while (current != null) {
    if (repeats.has(current.data)) {
      previous.next = current.next;
    } else {
      repeats.add(current.data);
      previous = current;
    }
    current = current.next;
  }
}

function removeDupsWODS(list) {
  let current = list.head;

  while (current != null) {
    let finder = current.next;
    let previous = current;
    while (finder != null) {
      if (current.data == finder.data) {
        previous.next = finder.next;
        finder = previous.next;
      }
      else {
        previous = finder;
        finder = finder.next;
      }
    }
    current = current.next;
  }
}

let list = new LinkedList();
list.appendToTail(1);
list.appendToTail(2);
list.appendToTail(3);
list.appendToTail(2);
list.appendToTail(4);
list.appendToTail(1);
list.appendToTail(1);

// console.log(list.toString());
// removeDups(list);
// console.log(list.toString());

console.log(list.toString());
removeDupsWODS(list);
console.log(list.toString());
