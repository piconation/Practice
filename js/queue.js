/**
 * Created by mattpowell on 6/6/16.
 */

function Queue() {
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
}

Queue.prototype.size = function () {
    return this.newestIndex - this.oldestIndex;
}

Queue.prototype.enqueue = function (data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex ++;
}

Queue.prototype.dequeue = function () {
    var oldestIndex = this.oldestIndex,
        newestIndex = this.newestIndex,
        deletedData;
    
    if (oldestIndex !== newestIndex) {
        deletedData = this.storage[oldestIndex];
        delete this.storage[oldestIndex];
        this.oldestIndex++;
        
        return deletedData;
    }
};

var myQ = new Queue();

myQ.enqueue("first");
myQ.enqueue("second");
myQ.enqueue("third");

console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());

