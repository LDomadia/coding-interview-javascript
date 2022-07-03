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

  getNode(data) {
    let current = this.head;
    while (current != null) {
      if (current.data == data) {
        return current;
      }
      current = current.next;
    }
    return 'Not Found';
  }
}

function deleteMiddleNode(midNode) {
  let prev = null;
  while (midNode.next != null) {
    midNode.data = midNode.next.data;
    prev = midNode;
    midNode = midNode.next;
  }
  prev.next = null;
}

let list = new LinkedList();
list.appendToTail(1);
list.appendToTail(2);
list.appendToTail(3);
list.appendToTail(4);
list.appendToTail(5);
list.appendToTail(6);

console.log(list.toString());
deleteMiddleNode(list.getNode(4));
console.log(list.toString());
