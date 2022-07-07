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

function intersect(node1, node2) {
  let length1 = 0;
  let length2 = 0;
  let head1 = node1;
  let head2 = node2;

  while (node1.next != null) {
    node1 = node1.next;
    length1++;
  } 

  while (node2.next != null) {
    node2 = node2.next;
    length2++;
  }
  
  if (node1 !== node2) {
    return 'Does not intersect';
  }
  let diff = Math.abs(length1 - length2);
  node1 = head1;
  node2 = head2;
  if (length1 > length2) {
    let temp = node1;
    node1 = node2;
    node2 = temp;
  }

  let i = 0;
  while (node2 != null && i < diff) {
    node2 = node2.next;
    i++;
  }

  while (node1 != null && node2 != null) {
    console.log(node1.data + ' and ' + node2.data);
    if (node1 === node2) {
      return node1;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  return 'An error occurred'
}

// TESTING
let node1 = new Node(1);
node1.appendToTail(new Node(2));
node1.appendToTail(new Node(3));
let node2 = new Node(9);
node2.appendToTail(new Node(8));
node2.appendToTail(new Node(7));
node2.appendToTail(new Node(6));
let node3 = new Node(4);
node3.appendToTail(new Node(5));
node1.appendToTail(node3);
node2.appendToTail(node3);
// console.log(node1 === node2)
console.log(intersect(node1, node2));
