function CustomArray(initialArray) {
    this.data = initialArray || [];
    this.map = function(callback) {
        const result = [];
        for (let i = 0; i < this.data.length; i++) {
            result.push(callback(this.data[i], i, this.data));
        }
        return result;
    };
    this.filter = function(callback) {
        const result = [];
        for (let i = 0; i < this.data.length; i++) {
            if (callback(this.data[i], i, this.data)) {
                result.push(this.data[i]);
            }
        }
        return result;
    };
    this.reduce = function(callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this.data[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < this.data.length; i++) {
            accumulator = callback(accumulator, this.data[i], i, this.data);
        }
        return accumulator;
    };
    this.forEach = function(callback) {
        for (let i = 0; i < this.data.length; i++) {
            callback(this.data[i], i, this.data);
        }
    };
    this.sort = function(compareFunction) {
        const arr = [...this.data]; 
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (compareFunction ? compareFunction(arr[j], arr[j + 1]) > 0 : arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };
}
const customArray = new CustomArray([5, 2, 9, 1, 5, 6]);
console.log(customArray.map(x => x * 2)); 
console.log(customArray.filter(x => x > 5));
console.log(customArray.reduce((acc, curr) => acc + curr, 0)); 
customArray.forEach(x => console.log(x)); 

console.log(customArray.sort((a, b) => a - b));
