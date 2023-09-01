// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


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

const englishBook = books.find((book) => book.language === 'English');
// {
//     "author": "Chinua Achebe",
//     "country": "Nigeria",
//     "imageLink": "images/things-fall-apart.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
//     "pages": 209,
//     "title": "Things Fall Apart",
//     "year": 1958
// }

const VietnameseBook = books.find((book) => book.language === 'Vietnamese');
// undefined


// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const idxItalianBook = books.findIndex((ele) => ele.language === 'Italian');
// 2, zero-based


const idxChineseBook = books.findIndex((book) => book.language === 'Chinese');
// -1


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast
// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

const lastEnglishBook = books.findLast((books) => books.language === 'English');
// {
//     "author": "Emily Bront\u00eb",
//     "country": "United Kingdom",
//     "imageLink": "images/wuthering-heights.jpg",
//     "language": "English",
//     "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
//     "pages": 342,
//     "title": "Wuthering Heights",
//     "year": 1847
// }