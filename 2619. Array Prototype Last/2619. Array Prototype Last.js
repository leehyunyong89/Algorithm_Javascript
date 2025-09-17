



Array.prototype.last = function() {
    if (this.length < 0) {
        return -1;
    } else if (this[0] == "") {
        return -1;
    } 
    else {
        return this[this.length - 1];
    }
};


const arr = [1, 2, 3];
const arr02 = [4,5,9];
console.log(arr.last());
console.log(arr02.last());