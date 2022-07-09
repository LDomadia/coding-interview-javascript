class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(newNode) {
    let current = this;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function loopDetection(node) {
  let prevNodes = new Set();
  while (node != null) {
    if (prevNodes.has(node)) {
      return node;
    }
    prevNodes.add(node);
    node = node.next;
  }
  return 'Not a loop';
}

let node1 = new Node(1);
node1.appendToTail(new Node(2));
let node2 = new Node(3);
node1.appendToTail(node2);
node1.appendToTail(new Node(4));
node1.appendToTail(new Node(5));
node1.appendToTail(node2);
console.log(loopDetection(node1));
