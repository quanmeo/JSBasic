const numbers = [1, 2, 3, 4, 5, 6, 7];

// callbaclFn: function(ele, idx, arr) => void

numbers.forEach((ele, idx, arr) => {
    console.log(ele, idx, arr);
});
// 1 0 [1, 2, 3, 4, 5, 6, 7]
// 2 1 [1, 2, 3, 4, 5, 6, 7]
// ...
