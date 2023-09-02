// destructuring array

const [a, b] = [1, 2, 3, 4];
// a = 1
// b = 2

const [first, , , fourth] = [10, 11, 12, 14, 15];
// first 10
// fourth 14

const [c, ...d] = [1, 2, 3, 4, 6];
// c 1
// d [2, 3, 4, 6]


// destructuring objects
const obj = {
    name: 'Quan',
    age: 28,
    sex: 'M',
    isMarried: true
};

const {name, sex} = obj;
// name = "Quan"
// sex = 'M'


const {name: userName, isMarried: married} = obj;
// userName = 'Quan'
// isMarried = true

