// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const numbers = [100, 9, 8, 22.2, 24, 567, 900];

const badSorts = numbers.slice().sort();
// [100, 22.2, 24, 567, 8, 9, 900]


const ascSort = numbers.slice().sort((a, b) => a - b);
// [8, 9, 22.2, 24, 100, 567, 900]

const descSort = numbers.slice().sort((a, b) => b - a);
// [900, 567, 100, 24, 22.2, 9, 8]


// To sort the elements in an array without mutating the original array, use toSorted().
const films = [
    {
      "title": "100% Wolf",
      "year": 2020,
      "votes": 65,
      "genreIds": [
        10751,
        16,
        14
      ],
      "description": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf."
    },
    {
      "title": "6 Underground",
      "year": 2019,
      "votes": 2869,
      "genreIds": [
        28,
        53
      ],
      "description": "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator."
    },
    {
      "title": "Alone",
      "year": 2020,
      "votes": 197,
      "genreIds": [
        53,
        27,
        18
      ],
      "description": "A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her."
    },
    {
      "title": "Assassin 33 A.D.",
      "year": 2020,
      "votes": 22,
      "genreIds": [
        878,
        28,
        12,
        9648
      ],
      "description": "When a billionaire gives a group of young scientists unlimited resources to study the science of matter transfer, the scientists unlock the secrets of time travel. But they soon find out that the project is backed by a militant extremist group, and the billionaire plans to go back in time and prove that Jesus never rose from the dead."
    },
    {
      "title": "Ava",
      "year": 2020,
      "votes": 1217,
      "genreIds": [
        28,
        80,
        18,
        53
      ],
      "description": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong."
    },
];

const ascVotesFilms = films.toSorted((film1, film2) => film1.votes - film2.votes);