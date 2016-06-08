/**
 * Created by mattpowell on 5/26/16.
 */

/*function receive(mynumber) {
    if(mynumber >= 1 && mynumber <= 20) {
        return true;
    }
    else {
        return false;
    }
}
console.log(receive(5));
console.log(receive(42));



function stringy(mystring) {
    if(mystring.length >= 5) {
        return true;
    }
    else {
        return false;
    }
}
//enter a value that is 5 characters
console.log(stringy("so"));
//enter a value that is not 5 characters
console.log(stringy("shorten"));

var stack;

beforeEach(function () {
    stack = new Stack();
});

describe('push', function() {

    it('increases the size of the stack', function() {
        stack.push(45645);
        expect(stack.size()).toEqual(1);
    });

    it('succeeds on a number input', function() {
        var success = stack.push(45455);
        expect(success).toBeTruthy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on not an object input', function () {
        var success = stack.push('&');
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on not an array input', function () {
        var success = stack.push('&');
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on not a function input', function () {
        var success = stack.push(function () {});
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on not a number input', function () {
        var success = stack.push('&');
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on a negative input', function () {
        var success = stack.push(-45455);
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

    it('fails on a decimal input', function () {
        var success = stack.push(45455);
        expect(success).toBeFalsy();
        expect(stack.size()).toEqual(1);
    });

});

describe('pop', function () {

});

describe('size', function () {

});

describe('isEmpty', function () {

});

function LinkedList() {
    this.head = null;
    
    this.insert = function (element) {
        
    };
    
    this.remove = function (element) {
        
    };
    
    this.contains = function (element) {
        
    };
    
    this.size = function () {
        
    };
}

function Node(value) {
    this.value = value;
    this.next = null;
}-*/

function LinkedLists() {
    this.head = null;
}

LinkedLists.prototype.push = function (val) {
    var node = {
        value: val,
        next: null
    }
    if(!this.head){
        this.head = node;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}

var myLL = new LinkedLists();

myLL.push(2);
myLL.push(3);
myLL.push(4);

console.log(myLL);
