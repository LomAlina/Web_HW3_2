// Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.

// function grettings() {
//     const name = prompt('Введите имя: ');
//     alert(`Привет, ${name}!`);
// }

// grettings();
// console.log(`Привет, ${name}!`);


const userName = prompt('Введите имя: ');
grettings(userName);
function grettings(name) {
    console.log(`Привет, ${name}!`);
}