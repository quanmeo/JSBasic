// spread function
function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const colors = ['green', 'red', 'yellow', 'orange'];

giveMeFour(colors);
// a ['green', 'red', 'yellow', 'orange']
// b undefined
// c undefined
// d undefined

giveMeFour(...colors);
// a green
// b red
// c yellow
// d orange

giveMeFour(...'Quan')
// a Q
// b u
// c a
// d n


// spread array literal
const citiesInAD = ['Pas de la Casa', 'Ordino', 'les Escaldes', 'la Massana', 'Encamp', 'Canillo', 'Arinsal', 'Andorra la Vella'];

const citiesInAE = ['Umm Al Quwain City', 'Ras Al Khaimah City', 'Muzayri', 'Murbaḩ', 'Maşfūţ', 'Zayed City', 'Khawr Fakkān'];


const allCities = [...citiesInAD, ...citiesInAE];
// ['Pas de la Casa', 'Ordino', 'les Escaldes', 'la Massana', 'Encamp', 'Canillo', 'Arinsal', 'Andorra la Vella', 'Umm Al Quwain City', 'Ras Al Khaimah City', 'Muzayri', 'Murbaḩ', 'Maşfūţ', 'Zayed City', 'Khawr Fakkān'];

const otherCities = ['Hanoi', ...citiesInAE, 'HCM', 'Bangkok']
// ['Hanoi', 'Umm Al Quwain City', 'Ras Al Khaimah City', 'Muzayri', 'Murbaḩ', 'Maşfūţ', 'Zayed City', 'Khawr Fakkān', 'HCM', 'Bangkok']




// speard object literal
const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4,
};

const feline = {
    legs: 4,
    family: 'Felidae',
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
// {
//     family: 'Caninae',
//     furry: true,
//     legs: 4,
//     isPet: true,
//     adorable: true
// };