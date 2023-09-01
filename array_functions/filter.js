// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

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

const largeCountries = countries.filter((country) => {
    // const population = 
    return parseInt(country.Population.split(',').join('')) > 20000
});
