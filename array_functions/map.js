// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// callbaclFn: function(ele, idx, arr) => any

const numbers = [1, 2, 3];

const new_numbers = numbers.map((ele, idx, arr) => {
    console.log(ele, idx, arr);

    return ele * 3;
});

// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]

// new_numbers [3, 6, 9]

const is_even = numbers.map((ele) => {
    return {
        value: ele,
        isEven: ele % 2 === 0
    }
});

// is_divisible [false, false, true]


const words = ['asap', 'byob', 'rsvp'];

const all_caps_split = words.map((ele) => {
    return ele.toUpperCase().split('').join('.');
});

// [A.S.A.P, 'B.Y.O.B', R.S.V.P]