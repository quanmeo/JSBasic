// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbers = [1, 2, 3]

// callbackFn (previousValue, currentValue, currentIdx, arr) => number
// array.reduce(callbackFn, initialValue)

const sum = numbers.reduce((currentTotal, currentValue) => currentTotal + currentValue);
// 6

const concat = numbers.reduce((a, b) => a + b, '');
// '123'


const sumOfEven = numbers.reduce((a, b) => b % 2 == 0? a + b : a + 0, 0);
// 2



const pipe = 
 (...functions) =>
 (initValue) => 
 functions.reduce((acc, fn) => fn(acc), initValue);


const double = x => 2 * x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

const multiply6 = pipe(double, triple);
const multiply12 = pipe(triple, quadruple);
const multiply24 = pipe(double, triple, quadruple);


const votes = ['y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const voteDict = votes.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc
}, {});

const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "images/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
];

const booksDict = books.reduce((acc, book) => {
    const type = book.pages % 2 == 0 ? 'even' : 'odd';
    acc[type] = acc[type] || [];
    acc[type].push(book);
    return acc;
}, {});