// rest parameters

function test(a, ...obj)
{
    console.log(a);
    console.log(obj);
}


test(1, 2, 3, 4, 'Quan', 'Trang');
// 1
// [2, 3, 4, 'Quan', 'Trang']


test('CS', name='Quan', age=23, class_='61A');
// CS
// ['Quan', 23, '61A']