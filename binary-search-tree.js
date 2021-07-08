class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
  // If the tree is empty, insert at the root
  if (this.root === null) {
    this.root = new Node(val);
    return this;
  }

  // Otherwise, find the correct spot for the new node.
  var current = this.root;
  while (true) {
    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      } else {
        current = current.left;
      }
    } else if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      } else {
        current = current.right;
      }
    }
  }
}

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val){
      if (current.left === null){
        current.left = new Node (val)
        return this
      }
      return this.insertRecursively(val, current.left)
    } else {
      if (current.right === null) {
        current.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while(currentNode){
        if(currentNode.val === val) return currentNode;
        if(currentNode.val > val) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if (!this.root) return undefined;

    if (val < current.val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val){
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current=this.root, visited=[]) {

    if(!this.root) return undefined;

    visited.push(current.val);
    if (current.left) this.dfsPreOrder(current.left, visited);
    if (current.right) this.dfsPreOrder(current.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current=this.root, visited=[]) {
    if(!this.root) return undefined;

    if (current.left) this.dfsInOrder(current.left, visited);
    visited.push(current.val);
    if (current.right) this.dfsInOrder(current.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current=this.root, visited=[]) {
    if(!this.root) return undefined;

    if (current.left) this.dfsPostOrder(current.left, visited);
    if (current.right) this.dfsPostOrder(current.right, visited);
    visited.push(current.val);
    return visited;
  
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      visited.push(node.val);
      if(node.left){
        queue.push(node.left)
      }
      if (node.right){
        queue.push(node.right)
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);


module.exports = BinarySearchTree;
