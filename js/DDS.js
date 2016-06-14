/**
 * Created by mattpowell on 6/13/16.
 */

function Dictionary() {
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for(var key in this.datastore) {
        console.log(key + "--> " + this.datastore[key]);
    }
}

var phonebook = new Dictionary();

phonebook.add("Mike", "123-5555");
phonebook.add("Julie", "123-4444");
phonebook.add("Fred", "123-6666");
console.log("Mike's number is:" + phonebook.find("Mike"));
phonebook.remove("Mike");
phonebook.showAll()


function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inorder = inorder;
}

function show() {
    return this.data;
}

function insert(data) {
    var n = new Node(data, null, null);
    if(this.root === null) {
        this.root = n;
    }
    else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if(current === null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inorder(node) {
    if(node !== null){
        inorder(node.left);
        console.log(node.show() + " ");
        inorder(node.right);
        //console.log(node.show() + " ");
    }
}

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(80);
nums.insert(13);
nums.insert(24);
nums.insert(99);
nums.insert(7);
console.log("inorder traversal: ");
nums.inorder(nums.root);
