// // <body>
// //      <div>
// //          <span>Enter a data please:</span><br/>
// //          <input type='text' id='name'>
// //           <input type='text' id='surname'>
// //     </div>
// //     <div>
// //           <button id='ok'>OK</button>
// //           <button id='cancel'>Cancel</button>
// //     </div>
// //  </body>
//
//
// let obj = {
//     "tagName": "body",
//     "subTags": [
//         {
//             "tagName": "div",
//             "subTags": [
//                 {
//                     "tagName": "span",
//                     "text": "Enter a data please:",
//                 },
//                 {
//                     "tagName": "input",
//                     "attrs": {
//                         "type": "text",
//                         "id": "name",
//                     },
//                 },
//                 {
//                     "tagName": "input",
//                     "attrs": {
//                         "type": "text",
//                         "id": "surname",
//                     },
//                 },
//             ]
//         },
//         {
//             "tagName": "div",
//             "subTags": [
//                 {
//                     "tagName": "button",
//                     "attrs": {
//                         "id": "ok",
//                     },
//                     "text": "OK",
//                 },
//                 {
//                     "tagName": "button",
//                     "attrs": {
//                         "id": "cancel",
//                     },
//                     "text": "Cancel",
//                 },
//             ]
//         }
//     ]
// };
//
// //
// // Выведите значения текста во второй кнопке, используя . и [].
// // Выведите значение атрибута id во втором input, используя . и [].
//
// alert(obj["subTags"][1]["subTags"][1]["text"]);
// alert(obj["subTags"][0]["subTags"][2]["attrs"]["id"]);
//
//
// // declarative fields
//
// // var text = "Enter a number";
// // var arr3 = [+prompt(text), +prompt(text), +prompt(text)]; //вводим числа.
//
// var notebook = {
//     brand: prompt("Enter a brand"),
//     type: prompt("Enter a type"),
//     model: prompt("Enter a model"),
//     ram: +prompt("Enter a ram"),
//     size: prompt("Enter a size"),
//     weight: +prompt("Enter a weight"),
//     resolution: {
//         width: +prompt("Enter a weight"),
//         height: +prompt("Enter a height"),
//     },
// };
//
// var phone = {
//     brand: prompt("Enter a brand"),
//     model: prompt("Enter a model"),
//     ram: +prompt("Enter a ram"),
//     color: prompt("Enter a color"),
// };
//
// var person = {
//     name: prompt("Enter a name"),
//     surname: prompt("Enter a surname"),
//     married: confirm("Enter you married"),
// };
//
// console.log(notebook);
// console.log(phone);
// console.log(person);
//
//
// // Добавьте персоне гаджеты, используя новые поля smartphone и laptop в объекте персоны
// // Добавьте владельца в гаджеты, используя новое поле owner в объектах телефона и ноутбука.
// //     обратите внимание на цикличность ссылок в объектах, если вы все сделали правильно, то
// // person.smartphone.owner.laptop.owner.smartphone == person.smartphone
//
// person.smartphone = phone;
// person.laptop = notebook;
// phone.owner = person;
// notebook.owner = person;
//
// // Создайте пустой массив и добавьте в него три элемента, введенные пользователем (prompt), используя императивный подход (несколько операторов подряд)
//
// let arr = [];
// for (let i = 0; 3 > i; i++) {
//     arr.push(prompt('введите слово'))
// }
// console.log(arr);
//
// // Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
//
// while (confirm() == false) {
//     confirm()
// }
//
// // Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push
//
// let arr1 = [];
// let word;
// while (word = prompt('введите слово1')) {
//     arr1.push(word)
//     if (word == false) {
//         break
//     }
// }
// console.log(arr1);
//
// // Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.
//
// let arr2 = [];
// let word2;
// let i=0;
// while (word2 = prompt('введите слово2')) {
//     arr2[i]=word2;
//     i++;
//     if (word2 == false) {
//         break;
//     }
// }
// console.log(arr2);

// Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9.
//     Код должен подсчитывать количество итераций и вывести это число с помощью alert.

// let j = 1;
// let random = Math.random();
// while (random < 0.9) {
//     if (random > 0.9) {
//         break
//     }
//     random = Math.random();
//     j++;
// }
// alert(j);
//
// // Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.
//
// // while (prompt('you')==false){ //todo
// //
// // }
//
// // Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.
//
// let sum = 0;
// for (let k = 1; 15 > k; k += 3) {
//     sum += k;
//     console.log(k);
// }
// console.log("сумма арифметической прогрессии от 1 до N c шагом 3 - " + sum);

// Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и указывается в одном месте в коде.

// let string = " ";
// for (let h = 0; h < 5; h++) {
//     string += "# "
// }
// console.log('"' + string + '"');

// Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789


// let table = '';
// for (let i = 0; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
//         table += j;
//     }
//     table+='\n';
// // }
// // console.log(table);
//
// Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.

// let table = '';
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 6; j++) {
//         if (i % 2 === 0) {
//             table += '.#';
//         } else if (i % 2 === 1) {
//             table += '#.';
//         }
//     }
//     table+='\n';
// }
// console.log(table)

// Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
// [0,1,8,27,64...]

// let arr=[];
// for (let i=0; i<20; i++){
//     arr.push(Math.pow(i, 3))
// }
// console.log(arr);

// C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте
// arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
// arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.


// window.addEventListener("load", function () {
//
//     let body = document.body;
//     let tableHtml = document.createElement('table');
//     body.appendChild(tableHtml);
//     let tbody = document.createElement('tbody');
//     tableHtml.appendChild(tbody);
//     for (let i = 1; i <= 9; i++) {
//
//         let tr = document.createElement('tr');
//         tbody.appendChild(tr);
//         let number1 = i;
//
//         for (let j = 1; j <= 9; j++) {
//
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             let number2 = j;
//             let innerRow = number1 * number2;
//             td.innerHTML = String(innerRow);
//         }
//     }
// });


window.addEventListener("load", function () {
    let arr = [];
    for (let i = 1; i < 10; i++) {
        let arr1 = [];
        arr.push(arr1);
        for (let j = 1; j < 10; j++) {
            arr1.push(j * i);
        }
    }
    console.log(arr)

    debugger
    let body = document.body;
    let tableHtml = document.createElement('table');
    body.appendChild(tableHtml);
    let tbody = document.createElement('tbody');
    tableHtml.appendChild(tbody);
    for (let value of arr) {

        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (let number of value) {

            let td = document.createElement('td');
            tr.appendChild(td);
            let innerRow = number;
            td.innerHTML = String(innerRow);
        }
    }
})


// let body = document.body;
// let tableHtml = document.createElement('table');
// body.appendChild(tableHtml);
// let tbody = document.createElement('tbody');
// tableHtml.appendChild(tbody);
// for (let i = 1; i <= 9; i++) {
//
//     let tr = document.createElement('tr');
//     tbody.appendChild(tr);
//     let number1 = i;
//
//     for (let j = 1; j <= 9; j++) {
//
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         let number2 = j;
//         let innerRow = number1 * number2;
//         td.innerHTML = String(innerRow);
//     }
// }
//     }
// )
// ;


// Задание на синий пояс: Треугольник
// Сформировать следующую строку - треугольник:
// .....#.....
// ....###....
// ...#####...
// ..#######..
//  .#########.
//  ###########


// while (line-- > 0)
//     console.log(Array(line + 1).join(a) + Array(2 * (lines - line)).join(b) + Array(line + 1).join(a));