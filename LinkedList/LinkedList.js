/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor(head) {
    this.head = new Node(head);
  }
  // 根据value查找节点 
  findByValue(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 根据index查找节点
  findByIndex(index) {
    const currentNode = this.head;
    const pos = 0;
    while (currentNode.next !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 向链表末尾追加节点
  append(newData) {
    const newNode = new Node(newData);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // 指定元素向后插入
  after(item, newData) {
    let currentNode = this.findByValue(item);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return;
    }
    const newNode = new Node(newData);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findPrev(item) {  
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.data !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  remove(item) {
    let currentNode = this.findByValue(item);
    if (currentNode === -1) {
      console.log('未找到元素');
      return;
    }
    const prevNode = this.findPrev(item);
    prevNode.next = currentNode.next;
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      // console.log(currentNode);
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  }

  checkCircle () {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
    }
    return false; 
  }

  reverseList() {
    const root = new Node('head')
        let currentNode = this.head.next
        while (currentNode !== null) {
            const next = currentNode.next
            currentNode.next = root.next
            root.next = currentNode
            currentNode = next
        }
        this.head = root
  }

  reverseList1() {
    let currentNode = this.head.next;
    let previouseNode = null;

    while (currentNode !== null) {
     const next = currentNode.next;
     console.log('next', next);
     currentNode.next = previouseNode;
     console.log('currentNode', currentNode);
     previouseNode = currentNode;
     console.log('previouseNode', previouseNode);
     currentNode = next;
     console.log('currentNode', currentNode);
    }

  }

  removeByIndexFromEnd(index) {
    // 先判断是否是环
    if (this.checkCircle()) return false;
    this.reverseList();
    this.removeByIndexFromStart(index);
  }

  removeByIndexFromStart(index) {
    let pos = 1;
    let currentNode = this.head.next;
    while (currentNode !== null && pos < index) {
      currentNode = currentNode.next;
      pos++;
    }
    if (currentNode === null) {
      console.log('无法删除最后一个节点或者该节点不存在');
      return;
    }
    this.remove(currentNode.data);
  }
}

const nodeA = new Node('he');


const linkedList = new LinkedList('head');
linkedList.append('nodeA');
linkedList.append('nodeB');
linkedList.append('nodeC');
linkedList.display();
linkedList.removeByIndexFromEnd(1);
linkedList.reverseList()
linkedList.display();

