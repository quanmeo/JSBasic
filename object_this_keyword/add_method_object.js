const add = function (a, b) {
    return a + b;
}

const math = {
    add
};


const math2 = {
    add: (a, b) => a + b
};


const cal = {
    first: 'Quan',
    last: 'Nguyen Huu',
    test() {
        console.log(this.first);
        console.log(last);
    },
    call() {
        return this.test;
    }
}


const test2 = cal.call()

test2();
