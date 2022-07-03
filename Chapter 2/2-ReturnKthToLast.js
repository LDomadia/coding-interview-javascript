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

function returnKthToLast(list, k) {
  if (list.head == null || k <= 0) {
    return 'Error';
  }
  let behind = list.head;
  let ahead = behind;
  for (let i = 1; i < k; i++) {
    ahead = ahead.next;
    if (ahead == null) {
      return 'Error';
    }
  }

  while (ahead.next != null) {
    ahead = ahead.next;
    behind = behind.next;
  }
  return behind.data;
}

let list = new LinkedList();
list.appendToTail(1);
list.appendToTail(2);
list.appendToTail(3);
list.appendToTail(4);
list.appendToTail(5);
list.appendToTail(6);

console.log(returnKthToLast(list, 3));
console.log(returnKthToLast(list, 7));
console.log(returnKthToLast(list, 6));
console.log(returnKthToLast(new LinkedList(), 4));
console.log(returnKthToLast(new LinkedList(new Node(4)), 1));
console.log(returnKthToLast(new LinkedList(new Node(4)), 4));
console.log(returnKthToLast(new LinkedList(new Node(4)), 0));
