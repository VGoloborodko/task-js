//БАЗОВЫЕ

// //Написать функцию, которая принимает два числа и возращает результат их умножения
// //Первый вариант
// function multiply(one, two) {
//     let sum = one * two;
//     console.log(sum);
// }

// multiply(10,4);

// //Второй вариант
// let sum = null;

// function multiply(one, two) {
//     sum = one * two;
// }

// multiply(10,4);
// console.log(sum);

//___________________________________________________________________________________

// //Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку 
// //"Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

// function data(firstName, lastName, age) {
//     console.log(`Привет ${firstName + ' ' + lastName} с возрастом ${age} лет`);
// }

// data('Vitaly', 'Dyatlov', 24)

//___________________________________________________________________________________

// //Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат 
// //функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

// const data = prompt('Укажите ваш пол "M" или "F"');

// function gender(data) {
//     if (data.toUpperCase() == 'M') {
//         console.log('Ваш пол мужской');
//     } else if (data.toUpperCase() == 'F') {
//         console.log('Ваш пол женский');
//     } else {
//         console.log('Ваш пол не опеределен');
//     }
// }

// gender(data)

//___________________________________________________________________________________

// //Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

// const number = +prompt('Введите число от 1 до 7');

// function week(number) {
//     switch(number) {
//         case 1:
//             console.log('Понедельник');
//         break;
//         case 2:
//             console.log('Вторник');
//         break;
//         case 3:
//             console.log('Среда');
//         break;
//         case 4:
//             console.log('Четверг');
//         break;
//         case 5:
//             console.log('Пятница');
//         break;
//         case 6:
//             console.log('Суббота');
//         break;
//         case 7:
//             console.log('Воскресенье');
//         break;
//         default:
//             console.log('Неверное число');
//         break;
//     }
// }

// week(number)

//___________________________________________________________________________________

// //Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), 
// //верните каждое первое слово в каждом предложении, через запятую.

// let firstWords = [];

// function firstLatter(text) {
//     let str = text.split('. ');
    
//     for (let i = 0; i < str.length; i++) {
//         let words = str[i].split(' ');
//         firstWords.push(words[0]);
//     }
//     console.log(firstWords);
// }

// firstLatter('Странная вещь. Время - удивительная штука. Когда ты молодой, у тебя полно времени, разбрасываешься им налево, направо. Пару лет туда, пару лет сюда. А потом становишься старше и вдруг, Господи, сколько мне осталось? Тридцать пять зим? Только подумай, тридцать пять зим...')
// //Мне кажется в задаче требовалось немного другое, но получилось вот так.

//___________________________________________________________________________________

// //Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// let name = prompt('Ваше имя', 'Виталий');
// let time = (new Date()).getHours();

// function greetings() {
//     if (time > 3 && time < 7) alert(`Доброй ночи ${name}`);
//     if (time > 6 && time < 12) alert(`Доброе утро ${name}`);
//     if (time > 11 && time < 17) alert(`Добрый день ${name}`);
//     if (time > 16 && time < 24) alert(`Добрый вечер ${name}`);
//     if (time > 23 && time < 4) alert(`Доброй ночи ${name}`);
// }

// greetings()

//___________________________________________________________________________________

// //Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой,
// // 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

// const val = prompt('Введите число от 1 до 100');

// if (val > 0 && val <= 17) {
//     alert('Ребенок');
// } else if (val > 17 && val <= 30) {
//     alert('Молодой');
// } else if (val > 30 && val <= 55 ) {
//     alert('Зрелый'); 
// } else if (val > 55) {
//     alert('Старый');
// } else {
//     alert('Ошибка');
// }

//___________________________________________________________________________________

// //Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый)

// const name = prompt('Введите имя', 'Виталий');
// const age = prompt('Введите возраст');

// function maturity(age) {
//     if (age > 0 && age <= 17) {
//         return 'Ребенок';
//     } else if (age > 17 && age <= 30) {
//         return 'Молодой';
//     } else if (age > 30 && age <= 55 ) {
//         return 'Зрелый'; 
//     } else if (age > 55) {
//         return'Старый';
//     } else {
//         return'Неверно указан возраст';
//     }
// }

// function human(name, age) {
//     console.log(`${name} имеет возраст ${age} и он ${maturity(age)}`)
// }

// human(name, age)

//___________________________________________________________________________________

//МАССИИВЫ

//Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
//если все элементы четные, если бы хотя бы один элемент не четный, то false.

// не сделал

//___________________________________________________________________________________

//Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
//если хотя бы один элемент нечетный, если все четные, то false.

// не сделал

//___________________________________________________________________________________

// //Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый 
// //массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

// function arrFilter(arr) {
//     const newArr = arr.filter(item => {
//         if (item % 5 === 0) {
//             return item;
//         }
//     })
//     console.log(newArr);
// }

// arrFilter([1,2,5,12,15,21])

//___________________________________________________________________________________

// //Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция 
// //возращает среднее арифметическое, (округлить результат до десятых)

// const arr = [5.23,4.44,7.21,5.54];

// function average(array) {
//     let sum = null;

//     for(let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }

//     let arithmetic = sum / arr.length
//     console.log(arithmetic.toFixed(1))
// }

// average(arr)

//___________________________________________________________________________________

//Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец 
//(например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься

//Не понял смысла

//___________________________________________________________________________________

// //Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) 
// //и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

// const employees = [{name: 'Иван', age: 27}, {name: 'Ольга', age: 24},{name: 'Алексей', age: 23}];

// function listEmployees() {
//     employees.forEach( elem => {
//         console.log(`Имя: ${elem.name}, возвраст: ${elem.age}`);
//     })
// }

// listEmployees()

//___________________________________________________________________________________

// function funcNumber(num) {
    // for(let i = 0; i < num.length; i++) {
    //     if(num[i] % 2 === 0) {
    //         console.log(num[i]);
//         }
//     }
// }

// funcNumber('123456789')

//___________________________________________________________________________________

// let size = null;
// const kb = 8192;

// size = kb * 15;

// console.log(`В одном киллобайте ${kb} битов`);

//___________________________________________________________________________________

// //Написать код, который считает сумму всех чисел

// const numbers = prompt('Введите числа');
// const arr = numbers.split('');
// let sum = null

// function sumfunc(arrElem) {
//     // arrElem.forEach(element => {
//     //     sum += +element;
//     // })
//     for (let i = 0; i < arrElem.length; i++) {
//         sum += +arrElem[i];
//     }
//     console.log(sum);
// }

// sumfunc(arr)

//___________________________________________________________________________________

//Напишите программу, которая просит пользователя ввести два четырёхзначных числа и выводит произведение этих чисел в консоль

// const add = prompt('Введите два четырёхзначных числа через запятую', '3456,5543');
// const array = add.split(',');
// let sum = null;

// function work(oneNum, twoNum) {
//     sum = oneNum * twoNum;
//     console.log(sum);
// }

// work(array[0], array[1])

//___________________________________________________________________________________

// const gender = prompt('Ввдеите пол "M" или "F"');

// const answer = gender === 'M' ? 'Male' : 'Female';

// console.log(answer);

//___________________________________________________________________________________

// const res = prompt('');

// switch(res) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default:
//         console.log('error');
//         break;
// }

//___________________________________________________________________________________

// const req = prompt('xx xx xx', '15 11 20');

// const oldArr = req.split(' ');
// const arr = oldArr.map(parseFloat);

// function comparison(arrNum, arrStr) {
//     // console.log(arrStr)
//     if (arrStr[0].length === 2 && arrStr[1].length === 2 && arrStr[2].length === 2) {
//         if (arrNum[0] === arrNum[1] || arrNum[0] === arrNum[2] || arrNum[1] === arrNum[2]) {
//         console.error('Ошибка');
//         } else if (arrNum[0] > arrNum[1] && arrNum[0] < arrNum[2] || arrNum[0] < arrNum[1] && arrNum[0] > arrNum[2]) {
//         console.log(`Среднее число ${arrNum[0]}`);
//         } else if (arrNum[1] > arrNum[2] && arrNum[1] < arrNum[0] || arrNum[1] < arrNum[2] && arrNum[1] > arrNum[0]) {
//             console.log(`Среднее число ${arrNum[1]}`);
//         } else if (arrNum[2] > arrNum[0] && arrNum[2] < arrNum[1] || arrNum[2] < arrNum[0] && arrNum[2] > arrNum[1]) {
//             console.log(`Среднее число ${arrNum[2]}`);
//         } else {
//             console.log('Какая то проблема');
//         }
//     } else {
//         console.log('Неправильно введены числа');
//     }
    
// }

// comparison(arr, oldArr)

//___________________________________________________________________________________

// const val = +prompt('');
// let sum = val;

// while (sum < 99) {
//     sum += 7;
//     console.log(sum);
// }

// const val = +prompt('');

// let i = 5;

// while(i < 100) {
//     i = i + 5;
//     console.log(i);
// }

// let sum = 10;
// let i = 0;

// while(sum < 99) {
//     sum++
//     if(sum % 2 !== 0) {
//         i = i + sum;
//     }
// }

// console.log(i);


// let br = 'Petya';
// // const arr = br.split('').reverse().join('').toLowerCase();
// // console.log(arr)
// let reverse = '';

// for (let i = 5 - 1; i >= 0; i--) {
//     // console.log(br.length - 1)
//     reverse += br[i];
// }

// console.log(reverse);


// let text = 'Hello. World.';
// const arr = text.split('');
// // console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '.') {
//         console.log(`Точка впервые встречается под индексом ${arr.indexOf(arr[i])}`)
//         break;
//     }
// }

// let text = 'Hello. World';

// for (let i = 0; i < text.length; i++) {
//     // console.log(text[i]);
//     if (text[i] === '.') {
//         console.log(`${text.indexOf(text[i])}`)
//         // break;
//     }
// }

// const str = "Hello. world.";

// for(let i = 0; i < str.length; i++){
//     console.log(`${str[i]} - ${str.indexOf(str[i])}`)

// }

// console.log(typeof new Array("Nnamdi", "Chidume")[Symbol.iterator]);

// const alien = {
//     name: 'Navin',
//     tech: 'JS',
//     laptop: {
//         cpu: 'i7',
//         ram: 4,
//         brand: 'Asus'
//     }
// }

// for (let i in alien.laptop) {
//     console.log(i, alien.laptop[i]);
// }

//___________________________________________________________________________________

//Фибоначи

// // let val = prompt('Число для фибоначи');

// function fibonacci(num) {
//     let a = 1,
//         b = 1;

//     for (let i = 3; i <= num; i++) {
//     let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log(fibonacci(10));

//___________________________________________________________________________________

// function logBalanceChange(dengi) {
//     money = money + dengi;
//     console.log('Баланс изменён');
//     console.log(`Доступно: ${money}`);
//   }

// let money = null;

// logBalanceChange(100)
// logBalanceChange(200)

//___________________________________________________________________________________

// let rub = 1200;
// let usd = 20;
// let exchange = 75;

// function moneyHuman() {
//     console.log(`Сумма на всех счетах ${rub + (usd * exchange)}`);
// }

// moneyHuman()

//___________________________________________________________________________________

// function min(a, b) {
//     return minNum = Math.min(a, b);
    
// }

// let result = min(7, 14);


// function isMonth(a) {
//     if (a > 0 && a <= 12) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// //   let input = prompt('Введите номер месяца:', '12');
//   if (isMonth(13)) {
//     console.log('Ответ записан');
//   } else {
//     console.log('Неверное значение');
//   }
  
//___________________________________________________________________________________

// const newArr = [];

// function examin(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 && !Number.isInteger(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// }

// // examin([5, 12, -1, -1.5, -9.1, 52, -40, 23, 0, -4, -5.6])

//___________________________________________________________________________________

// function min(a, b) {
//     if (a < 0 || b < 0) {
//         return null;
//     }
//     return Math.min(a, b);
// }

// console.log(min(7, 5));

//___________________________________________________________________________________

// //Вывести в консоль все отрицательные и не целые числа

// function examin(arr) {
//     return arr.filter(element => element < 0 && !Number.isInteger(element));
// }

// console.log(examin([5, 12, -1, -1.5, -9.1, 52, -40, 23, 0, -4, -5.6]));

//___________________________________________________________________________________
