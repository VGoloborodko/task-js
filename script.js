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

// function examin(arr) {
//     const newArr = arr.filter((element) => element < 0);
//     console.log(`Новый масив ${newArr} старый массив ${arr}`);
// }
    
// examin([5, 12, -1, -1.5, -9.1, 52, -40, 23, 0, -4, -5.6])

//___________________________________________________________________________________

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// const sumArr = arr.reduce((sum, elem) => sum + elem);

// console.log(arr);
// console.log(sumArr);

//___________________________________________________________________________________

// const add5 = (number) => {
//     return number + 5;
//   }
  
  
//   let value = 10;
//   value = add5(value);
//   console.log(value);

//___________________________________________________________________________________

// let amount = 5000;

// let yearDeposit = (rate, num) => {
//   return rate += rate / 100 * num;
// }

// amount = yearDeposit(amount, 80);
// console.log(amount);

//___________________________________________________________________________________

// //Вызов функции в функции

// function outer() {

//     return function() {
//       console.log('Inner function here');
//     }
//   }
  
//   const inner = outer();
  
//   inner();
  
//___________________________________________________________________________________

// const name = 58444;

// const strName = String(name).split('').reverse().join();

// console.log(strName);

// const arr = ['Petya', 'Fedor', 'Vitaly'];

// const [...newArr] = arr;

// console.log(arr);
// console.log(newArr);

// const arr = ['Petya', 'Fedor', 'Vitaly', 'Katya', 'Alena'];

// const [, , name, ...newArr] = arr;

// console.log(newArr);
// console.log(name);

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

  
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 1 || matrix[i][j] === 4 || matrix[i][j] === 7) {
//             console.log(matrix[i][j]);
//         }
//     }
// }


// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 2; j < matrix[i].length; j++) {
//         console.log(matrix[i][0]);
//         // console.log(matrix[j]);
//     }
// }

// const arr = [1, 2, 3, 4, 5];

// function callback(item, index, array) {
//     // console.log(`Элемент ${item} с инексом ${index}`);
//     console.log(array);
// }

// arr.forEach(callback);

// const arr = [1, 2, 3, 4, 5];

// function callback(arr) {
//     arr.forEach((item, index) => {
//         console.log(`${item} - это значение элемента с индексом ${index}`);
//     })
  
// }

// callback(arr)

// const arr = [1, 2, 3, 4, 5];

// function callback(item, index) {
//   console.log(`${item} - это значение элемента с индексом ${index}`);
// }

// arr.forEach(callback);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item, index) => {
//   return item + 5;
// });

// console.log(newArr);

// function updateArr(arr) {
//     const newArr = arr.map(item => {
//         if (item < 0) {
//             return item * -1;
//         } else if (item > 0) {
//             return item * 2;
//         }
//         return item;
//     })
//     console.log(newArr);
// }

// updateArr([12, -23, -40, 3]);

// function findThreeLettersWord(arr) {
//     arr.find((item, index) => {
//         if (item.length === 3) {
//             console.log(`${item} ${index}`);
//         }
//     })
// }

// findThreeLettersWord(['Green','Red', 'Blue']);

// const arr = [5, -10, 15, -20];

// function func(item) {
//     return item > 0;
// }

// console.log(arr.filter(func));

// function sortStrings(arr) {
//     const newArr = arr.map(item => {
//         return item;
//     });
//     const arrSort = newArr.sort((a, b) => {
//         return a - b;
//     })
//     console.log(arrSort);
// }

// sortStrings(['Hofstadter', 'Cooper', 'Wolowitz', 'Koothrappali']);
// sortStrings([5,1,9,3,4,7]);

//___________________________________________________________________________________

// const str = [1,5,4,5,4,8];

// for (let item of str) {
//     // console.log(`Элемент ${str[i]} с индексом ${i}`);
//     console.log(`Элемент ${item} индекс ${str.indexOf(item)}`);
// }

//___________________________________________________________________________________

// const str = new String('Chidume');

// console.log(typeof str[Symbol.iterator]);

// console.log(Number.isInteger(2.2));

// let str = 'Petya';
// let reverse = '';

// for (let i = str.length- 1; i >= 0; i--) {
//     reverse += str[i];
// }

// console.log(reverse.toLowerCase());

// const str = [213];

// const arr = str.map(String);

// console.log(str)

// console.log(arr)

//___________________________________________________________________________________

//Spread оператор

// const namesGroupOne = ['Aleksey', 'Andrey', 'Petya', 'Vitaly'];
// const namesGroupTwo = ['Olga', 'Alena', 'Yulia', 'Dasha'];

// console.log([...namesGroupOne, 'Habl', ...namesGroupTwo]);

//Раньше использовался метод concat()

// const namesGroupOne = ['Aleksey', 'Andrey', 'Petya', 'Vitaly'];
// const namesGroupTwo = ['Olga', 'Alena', 'Yulia', 'Dasha'];
// const allNames = namesGroupOne.concat(namesGroupTwo);
// console.log(allNames);

//С объектами

// const citiesSecurityRussia = {
//     Moscow: true,
//     Ryazan: false,
//     Sochi: true
// }

// const citiesSecurityEuropa = {
//     Paris: true,
//     Minsk: false,
//     Rome: true
// }

// const citiesSecurity = {...citiesSecurityRussia, ...citiesSecurityEuropa}

// console.log(citiesSecurity);

//

// const arr = [45,74,22,64,91];

// function sum(a, b, ...rest) {
//     // console.log(rest)
//     return a + b + rest.reduce((one, two) => one + two, 0)
// }

// console.log(sum(...arr))

// console.log(...arr);
// console.log(Math.max(...arr));

//___________________________________________________________________________________

//Фибоначи

// let val = prompt('Число для фибоначи');

// function fibonacci(num) {
//     let a = 0,
//         b = 1;
//         sum = 2;

//     for (let i = 2; i <= num; i++) {

//         let c = a + b;

//         a = b;
//         b = c;
//         sum += b;
//         console.log(sum);
//     }
//     // return sum;
// }
    
// console.log(fibonacci(10));

//___________________________________________________________________________________

//Метод map

// const arr = [1,5,3,7,8,4,0];
// console.log(arr);

// const newArr = arr.map(item => item * 2);
// console.log(newArr);


// const map = Array.prototype.map;
// console.log(map);

// const charCodes = map.call('Hello World', (elem) => elem.charCodeAt(0));
// // const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
// console.log(charCodes);


// const string = '12345';
// console.log(string);

// // const reversed = string.split('').reverse().join('');
// const reversed = Array.prototype.map.call(string, elem => elem).reverse().join('');
// console.log(reversed);


// // const array = ['1','2','3'].map(parseInt); // [ 1, NaN, NaN ]
// const array = ['1','2','3'].map(Number); // [ 1, 2, 3 ]
// console.log(array);


// Метод Number.isInteger()
// console.log(Number.isInteger(10 / 5));

//___________________________________________________________________________________

//Сортировка

// const arr = ['P','E','T','Y','A'];
// // const arr = [5,7,3,2,8,9,0,6,1,4];

// function compare(array) {
//     array.sort().reverse();
// }

// compare(arr)
// console.log(arr);


// var stringArray = ['Голубая', 'Горбатая', 'Белуга', 'AAA'];

// function compareNumbers(a, b) {
//     return a - b;
//   }

// compareNumbers(stringArray);
// console.log(stringArray.join(' '));
// // console.log(stringArray);


//Reduce

// const nums = [5,7,3,2,8,9,0,6,1,4];
// let res;

// const result = nums.reduce( 
//     (acc, item) => {  // Результат прошлых операций и следующий элемент
//         res = acc + item;
//         return res;
// }, 0); // Начальное значение

// console.log(nums, res);


// //Сумма квадратов массива

// function squareSum(arr) {
//     const result = arr.reduce((acc, item) => {return item * item + acc}, 0);
//     return result;
// }

// console.log(squareSum([2, 3, 4]));

//___________________________________________________________________________________

//Объекты

// const player = {
//     'first name': 'Eric',
//     'last name': 'Cartman',
//     isPremium: true,
//     level: 14,
//     greet: function(num) {
//         // this.level = num;
//     },
// }

// player.status = 'active';

// player.greet(15);
// console.log(player);

// for (const key in player) {
//     console.log(`Ключ ${key} значение ${player[key]}`); // Показать все значения свойств
// }

// console.log(Object.values(player)); // Вывести значения объекта

// console.log(player);
// console.log('status' in player); //Проверяет есть ли данное свойство у объекта

//___________________________________________________________________________________

// Напишите однострочное решение, которое вычисляет сумму квадратных корней 
//для всех чётных чисел целочисленного массива.

// const array = [4,16,36,9];
// let sum = 0;

// function func(arr) {
//     arr.forEach(item => item % 2 === 0 ? sum += Math.sqrt(item) : item);
//     // console.log(sum);
// }

// func(array)

//___________________________________________________________________________________

//Обычное создание объекта
// const player = {
//     'first name': 'Eric',
//     'last name': 'Cartman',
//     isPremium: true,
//     level: 14,
//     greet: function(num) {
//         // this.level = num;
//     },
// }

//Тоже самое, что и выше
// const player = new Object({
//     'first name': 'Eric',
//     'last name': 'Cartman',
//     isPremium: true,
//     level: 14,
//     greet: function(num) {
//         // this.level = num;
//     },
// })

// const lena = Object.create(player);

// player.status = true; //Добавление свойства
// player.status = false; //Изменение свойства
// delete player.status; //Удаление свойства
// console.log(player);

// console.log('level' in player); // Проверка, есть ли данное свойство в объекте

//___________________________________________________________________________________

// //Создайте функцию addTax(). Передайте в неё данный массив price с ценами без НДС. 
// //С помощью функции addTax() создайте массив с ценами с НДС. НДС cоставляет 20%.

// const price = [1, 65.5, 3464.65, 59, 13, 45.55, 3456, 245, 1000];
// // console.log(price);

// function addTask(arr) {
//     const newPrice = arr.map(element => {return element + element / 100 * 20});
//     console.log(newPrice);
// }

// addTask(price)

//___________________________________________________________________________________

//ПЕРЕБОР МАССИВА

// //Напишите функцию countEvensAndOdds(), которая получает в качестве параметра массив чисел 
// //и возвращает сообщение с информацией о том, сколько в массиве чётных и нечётных чисел.

// const numbers = [22,30,74,13,9,29,33,46,4];

// let even = null; //четные
// let odd = null; //нечетные

// function countNumbers(arr) {
//     arr.forEach(element => {
//         if (element % 2 === 0) even++
//         else odd++
//     })
//     console.log(`В массиве ${even} четных числа и ${odd} нечетных`);
// }

// countNumbers(numbers)

//___________________________________________________________________________________

//СОРТИРОВКА

//Напишите функцию sortByBirth, которая получает в качестве параметра массив строк 
//в формате 'имя, год рождения' и возвращает массив строк, отсортированных по году рождения.

// function sortByBirth(arr) {
//     sortArr = arr.sort((a, b) => {
//         return a.split(',')[1] - b.split(',')[1];
//     })
//     return sortArr;
// }

// console.log(sortByBirth([
//     'Nicola Tesla, 1856',
//     'Alan Turing, 1912',
//     'Ada Lovelace, 1815'
//   ]));


//Другой код

// const arrayProduct = ['Светильник, красный, 590', 'Лампа, бирюзовая, 260', 'Ночник, зоопарк, 150'];

// function sortProductPrice(a, b) {
//     return a.split(',')[2] - b.split(',')[2];
// }

// console.log(arrayProduct.sort(sortProductPrice));

//___________________________________________________________________________________

// console.log(parseInt(3.14));
// console.log(parseFloat('3.14'));
// console.log(parseFloat('314e-2'));
// console.log(parseInt('0.5514E+2'));
// console.log(parseFloat('3.14какие-нибудь не цифровые знаки'));

//___________________________________________________________________________________

//КЛАССЫ

// //Повторение

// class User {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//         this.isAvailable = false;
//     }
//     toggleAvailable(isAv) {
//         this.isAvailable = isAv;
//     }
// }

// const user1 = new User('Luke Skywalker', 'Russia');
// const user2 = new User('Han Solo', 'USA');

// user1.toggleAvailable(true)

// console.log(user1);
// console.log(user2);


// //Упражнение

// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     celebrateBirthday(plus) {
//         this.age = this.age + plus;
//     }
// }

// const user_one = new Person('Миронов', 'Николай', 24, 'M');
// // const user_two = new Person('Гладкая', 'Соня', 25, 'F');
// // const user_tree = new Person('Луконин', 'Никита', 23, 'M');

// user_one.celebrateBirthday(1)

// console.log(user_one);
// // console.log(user_two);
// // console.log(user_tree);


// //Наследование

// class Vehicle {
//     constructor(maxSpeed, color) {
//       this.maxSpeed = maxSpeed;
//       this.color = color;
//     }
// }
  
// class Car extends Vehicle {
//     constructor(maxSpeed, color, mileage) { //Если нужно впистаь дополнительные свойства, писать здесь
//       super(maxSpeed, color); //То что надо унаследовать
//       this.mileage = mileage;
//     }
// }

// const one = new Vehicle(200, 'black');
// const two = new Car(250, 'white', false);

// console.log(one);
// console.log(two);


// //УПРАЖНЕНИЕ

// class Person {
//     constructor(surname, name, age, gender) {
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     celebrateBirthday(plus) {
//         this.age = this.age + plus;
//     }
// }

// const user_one = new Person('Миронов', 'Николай', 24, 'M');
// user_one.celebrateBirthday(1)
// console.log(user_one);

// class Admin extends Person {
//     constructor(surname, name, age, gender, role, id) {
//         super(surname, name, age, gender);
//         this.role = role;
//         this.id = id;
//     }
// }

// const user_admin = new Admin('Романов', 'Николай', 24, 'M', 'Cesar', 01);
// console.log(user_admin);

// class Player extends Person {
//     constructor(surname, name, age, gender, level) {
//         super(surname, name, age, gender);
//         this.level = level;
//     }
// }

// const user_player = new Player('Дуров', 'Андрей', 17, 'M', 22);
// console.log(user_player);

//___________________________________________________________________________________

//DOM 

// // ЗАДАНИЕ

// const elem = document.querySelectorAll('.primary');
// elem.forEach(element => {
//     element.style.color = 'red';
//     console.log(element.innerHTML);
// })

// const allLi = document.querySelector('ul');

// console.log(allLi.parentElement);
// console.log(allLi.previousElementSibling.innerHTML = 'GeForce 20 Series');
// console.log(allLi.children);
// for (let i = 0; i < allLi.children.length; i++) {
//     console.log(allLi.children[i].innerHTML);
// }
// console.log(allLi.firstElementChild.innerHTML);


// //Добавление и удаление класса

// const elementClasses = element.classList.add('class');
// const elementClasses = element.classList.remove('class');


// // // // ЗАДАНИЕ - НЕРЕШЕННОЕ

// const listElements = document.querySelectorAll('li');
// const parentElementTag = document.querySelector('ul');
// const array = [...listElements];

// // console.log(array);

// array.forEach((element, index) => {
//     element.classList.add('item');
    
//     if (element.classList.contains('primary')) {
        
//         element.remove();
//     }
//     else element.classList.add('secondary');

// })

// console.log(array);
// console.log(listElements);

// const addElement = document.createElement('li');
// addElement.classList.add('item');
// addElement.innerHTML = 'TITAN RTX';
// parentElementTag.insertBefore(addElement, listElements[0]);

//___________________________________________________________________________________

// //Перевернуть строку - реверсия
// const name = 'Petya';
// let reverse = '';
// for (let i = name.length - 1; i >= 0; i--) {
//     reverse += name[i];
// }
// console.log(reverse);

// const map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');

// const iterator1 = map1.keys();

// console.log(iterator1.next().value);
// // expected output: "0"

// console.log(iterator1.next().value);
// // expected output: 1

// console.log(map1);

// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
// const newData = JSON.parse(data);
// newData.id = 157;
// const changeData = JSON.stringify(newData);
// console.log(changeData);

// const div = document.querySelector('.jokes');

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', event => {
//     console.log(event.target.innerHTML);
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             const element = document.createElement('p');
//             element.innerHTML = data.value;
//             div.append(element);
//         })
//         .catch(error => {
//             console.log(error.message);
//         })

// });


//ПОИСК ТРАНЗАККЦИИ на сервере
// const div = document.querySelector('.jokes');

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', event => {
//     console.log(event.target.innerHTML);
//     fetch('https://acb-api.algoritmika.org/api/transaction?to=obama')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(`${data[i].from} перевел ${data[i].to} платеж ${data[i].amount}`);
//                 const translations = document.createElement('p');
//                 translations.innerHTML = `${data[i].from} перевел ${data[i].to} платеж ${data[i].amount}`;
//                 div.append(translations);
//             }
            
//         })
//         .catch(error => {
//             console.log(error.message);
//         })

// });

//___________________________________________________________________________________

// //СОЗДАНИЕ ТРАНЗАКЦИИ на сервер
// const div = document.querySelector('.jokes');

// const info = {
//     from: 'Fedya',
//     to: 'Mischa',
//     amount: 3000
// }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', event => {
//     console.log(event.target.innerHTML);
//     // fetch('https://acb-api.algoritmika.org/api/transaction/362', {
//     //     method: 'DELETE'
//     // })

//     //PUT запрос
//     // fetch('https://acb-api.algoritmika.org/api/transaction/370', {
//     //     method: 'PUT',
//     //     headers: {
//     //         'Content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(info)
//     // })

//     //POST запрос
//     // fetch('https://acb-api.algoritmika.org/api/transaction', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(info)
//     // })

//     fetch('https://acb-api.algoritmika.org/api/transaction')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(`${data[i].from} перевел ${data[i].to} платеж ${data[i].amount}`);
//                 const translations = document.createElement('p');
//                 translations.innerHTML = `${data[i].from} перевел ${data[i].to} платеж ${data[i].amount}`;
//                 div.append(translations);
//             }
            
//         })
//         .catch(error => {
//             console.log(error.message);
//         })

// });

//___________________________________________________________________________________

//АСИНХРОННОЕ ПРОГРАММИРОВАНИЕ

// //МЕТОД setTimeout - вызывается один раз
// console.log('Bill Gates');
// setTimeout(() => {
//     console.log('Steve Jobs');
// }, 1000)
// console.log('Elon Mask');

// //МЕТОД setInterval - вызывается много раз
// let time = 0;

// const id = setInterval(() => {
//     time += 1;
//     console.log(`Прошло ${time} сек.`);
//     if (time === 10) {
//         clearInterval(id);
//     }
// }, 1000);

//___________________________________________________________________________________


// const arr = [];

// function adata() {

//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             arr.pop()
//             arr.push(data.value)
//             // console.log(arr);
//         })
//         .catch(error => {
//             console.log(`Произошла ошибка: ${error.message}`);
//         });
//         p.innerHTML = arr[0];
//         // console.log(arr);
// }


// let body = document.querySelector("body")
// let button = document.createElement("button")
// button.style.width = "100px"
// button.style.height = "100px"
// body.append(button)
// button.addEventListener("click", adata)

// let p = document.createElement('p')
// body.append(p)

//___________________________________________________________________________________

//Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст 
//([{name: 'Иван', age: 23},...]) и возвращает массив, где каждый элемент представляет из себя 
//строку "Имя: Иван, возвраст: 23".


// function process(staff) {
//     const arr = [];

//     for (let i = 0; i < staff.length; i++) {
//         arr.push(`Имя: ${staff[i].name}, возрвст: ${staff[i].age}`);
//     }

//     return arr;
// }

// console.log(process([{name: 'Иван', age: 19}, {name: 'Виталий', age: 24}, {name: 'Ольга', age: 24}, {name: 'Андрей', age: 30}]));

//___________________________________________________________________________________

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }

// function multiplyNumeric() {
//     menu.width = menu.width * 2;
//     menu.height = menu.height * 2;
// }

// multiplyNumeric(menu);
// console.log(menu);

//___________________________________________________________________________________

// //Задание setInterval

// const paragraph = document.querySelector('.par');
// const buttonStart = document.querySelector('.start');
// buttonStart.addEventListener('click', change);
// const buttonStop = document.querySelector('.stop');

// let time = 0;

// function change() {
//     const id = setInterval(() => {
//         time += 1;
//         paragraph.innerHTML = time;
//         buttonStop.addEventListener('click', () => {
//             clearInterval(id);
//         })
//     }, 1000)
// }

//___________________________________________________________________________________

// //Promise asyns и await

// fetch('https://rickandmortyapi.com/api/character')
//     .then(res => res.json())
//     .then(data => console.log(data))


// const getCharacterData = async (id) => {
//     const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//     const data = await response.json();

//     return data;
// }

// console.log(getCharacterData(1));

//___________________________________________________________________________________

// loadList = async () => {
//     const response = await fetch(
//         "https://acb-api.algoritmika.org/api/transaction"
//       );
     
//       const body = await response.json();
//       return body;         
// }

// console.log(loadList());

//___________________________________________________________________________________

// //Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует 
// //инпут с помощью атрибута disabled, а другая разблокирует.

// const input = document.querySelector('input');
// const btnBlock = document.querySelector('.btn_block');
// btnBlock.addEventListener('click', () => {
//     input.disabled = true;
// })
// const btnOnlock = document.querySelector('.btn_onlock');
// btnOnlock.addEventListener('click', () => {
//     input.disabled = false;
// })

//___________________________________________________________________________________

// //Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.

// const div = document.querySelector('div');
// div.addEventListener('mouseover', (event) => {
//     event.target.style.background = 'green';
//     div.addEventListener('mouseout', (event) => {
//         event.target.style.background = 'red';
//     })
// })

//___________________________________________________________________________________

// //Метод sort()

// const arr = ['яблоко', 'вишня', 'апельсин'];
// arr.sort()
// console.log(arr);

// const arr = ['33', '4', '1111', '222'];
// arr.sort((a,b) => {
//     return a - b
// })
// console.log(arr);

// const arr = ['жук', 'Лиса', 'кот'];
// arr.sort((a,b) => {
//     let one = a.toLowerCase();
//     let two = b.toLowerCase();
//     if (one > two) return -1
//     if (one < two) return 1
//     return 0
// })
// console.log(arr);


// //Метод slice()

// const arr = [1,2,3,4,5]
// const newArr = arr.slice(0)
// console.log(newArr);

//стр. 133 переписать методы массивов

//___________________________________________________________________________________

// // const arr = [55,12,444,30,22,74,3333];
// // const arr = ['Petya', 'Ambrom', 'Betsy', 'Yanki', 'Vitaly'];
// const arr = ['petya', 'ambrom', 'betsy', 'yanki', 'Vitaly'];

// arr.sort((s,t) => {
//     let a = s.toLowerCase();
//     let b = t.toLowerCase();
//     if(a < b) return -1;
//     if(a > b) return 1;
//     return 0;
// })

// console.log(arr);

//___________________________________________________________________________________

