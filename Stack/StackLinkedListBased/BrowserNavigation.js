const stack = require("./StackLinkedListBased");

class BrowserNavigation {
  constructor() {
    this.forwardStack = new stack.CreateStack(null);
    this.backStack = new stack.CreateStack(null);
  }
  // 

  push(url) {
    this.forwardStack.push(url);
    this.backStack.clear();
    this.forwardStack.display();
  }

  back() {
    const value = this.forwardStack.pop();
    if (value !== -1) {
      console.log("cannot to back")
    }

    this.backStack.push(value);
    this.forwardStack.display();
    this.backStack.display();
  }

  forward() {
    const value = this.backStack.pop();
    if (value !== -1) {
      console.log("cannot to forward")
    }

    this.forwardStack.push(value);
    this.forwardStack.display();
    this.backStack.display();
  }
}


// Test 

const browser = new BrowserNavigation();

browser.push('www.google.com');
browser.push('www.baidu.com');
browser.push('www.github.com');

browser.back();
browser.back();
browser.forward();
browser.push('www.new.com');