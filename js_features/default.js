function multiply(x, y) {
    if (y === undefined) {
        return x;
    }
    return x * y;
}

function multiply2(x, y) {
    if (typeof y === undefined) {
        y = 1;
    }
    return x * y;
}

// default param version
function multiply3(x, y = 1) {
    return x * y;
}



const greet = (person, greeting = "Hi") => {
    console.log(`${greeting} ${person}`)
};