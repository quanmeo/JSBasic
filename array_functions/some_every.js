// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

const numbers = [1, 2, 3, 6, 8, 9];

const hasEven = numbers.some((ele) => ele % 2 == 0);
// true






// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

const countries = [
    {
        "Country": "Andorra",
        "Capital": "Andorra la Vella",
        "Area in km\u00b2": "468.0",
        "Population": "77,006",
        "Continent": "EU"
    },
    {
        "Country": "United Arab Emirates",
        "Capital": "Abu Dhabi",
        "Area in km\u00b2": "82,880.0",
        "Population": "9,630,959",
        "Continent": "AS"
    },
    {
        "Country": "Afghanistan",
        "Capital": "Kabul",
        "Area in km\u00b2": "647,500.0",
        "Population": "37,172,386",
        "Continent": "AS"
    },
    {
        "Country": "Antigua and Barbuda",
        "Capital": "St. John's",
        "Area in km\u00b2": "443.0",
        "Population": "96,286",
        "Continent": null
    },
    {
        "Country": "Anguilla",
        "Capital": "The Valley",
        "Area in km\u00b2": "102.0",
        "Population": "13,254",
        "Continent": null
    },
    {
        "Country": "Albania",
        "Capital": "Tirana",
        "Area in km\u00b2": "28,748.0",
        "Population": "2,866,376",
        "Continent": "EU"
    },
    {
        "Country": "Armenia",
        "Capital": "Yerevan",
        "Area in km\u00b2": "29,800.0",
        "Population": "2,951,776",
        "Continent": "AS"
    },
    {
        "Country": "Angola",
        "Capital": "Luanda",
        "Area in km\u00b2": "1,246,700.0",
        "Population": "30,809,762",
        "Continent": "AF"
    },
    {
        "Country": "Antarctica",
        "Capital": null,
        "Area in km\u00b2": "14,000,000.0",
        "Population": "0",
        "Continent": "AN"
    },
    {
        "Country": "Argentina",
        "Capital": "Buenos Aires",
        "Area in km\u00b2": "2,766,890.0",
        "Population": "44,494,502",
        "Continent": "SA"
    },
    {
        "Country": "American Samoa",
        "Capital": "Pago Pago",
        "Area in km\u00b2": "199.0",
        "Population": "55,465",
        "Continent": "OC"
    },
];

const allBigCountry = countries.every((ele) => parseInt(ele.Population.split(',').join('') > 20000));
// false