const role = 'host name';
const person = 'Nguyen Huu Quan';

const role2 = 'director';
const person2 = 'Nguyen Mai Trang';

// old
const team = {};
team[role] = person;
team[role2] = person2;

// {
//     host: 'Nguyen Huu Quan',
//     director: 'Nguyen Mai Trang'
// }

// new
const team = {
    [role]: person,
    [role2]: person2,
    [1 + 2 + 3]: 'Soc'
}
// {
//     host: 'Nguyen Huu Quan',
//     director: 'Nguyen Mai Trang'
// }


// old
function addProp(obj, k, v) {
    const copy = {
        ...obj
    };
    copy[k] = v;

    return copy
}

// new
const addProd2 = (obj, k, v) => ({...obj, [k]: v});