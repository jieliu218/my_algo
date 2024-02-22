class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedListBased {
  constructor(top) {
    this.top = new Node(top);
  }

  push(newData) {
    const newNode = new Node(newData);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return -1;
    }
    const value = this.top.data;
    this.top = this.top.next;
    return value;
  }

  display() {
    let currentNode = this.top;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.top = null;
  }

}

// Test 

// const stack = new StackLinkedListBased(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.display()); // 1, 2, 3

// stack.pop();
// stack.pop(); //1

// console.log(stack.display())

exports.CreateStack = StackLinkedListBased;