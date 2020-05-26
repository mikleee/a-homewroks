let persons = [
    {name: 'Vasya', surname: 'Vetrov'},
    {name: 'Vasya', surname: 'Vetrov'},
    {name: 'Anna', surname: 'Pavlova'},
    {name: 'Petr', surname: 'Petrov'},
    {name: 'Viktor', surname: 'Pavlik'},
    {name: 'Pavlo', surname: 'Zibrov'},
    {name: 'Masha', surname: 'Pirogova'},
    {name: 'Vanya', surname: 'Ivanon'},
    {name: 'Ananas', surname: 'Ananasov'},
    {name: 'Lemon', surname: 'Lemonov'},
    {name: 'Tomat', surname: 'Pomidorov'}
];

// debugger;
// let table = document.createElement('table');
//
// let thead = document.createElement('thead');
// thead.innerHTML = `
//         <tr>
//             <th>Name</th>
//             <th>Surname</th>
//         </tr>`;
// table.appendChild(thead);
//
// let tbody = document.createElement('tbody');
// let tbodyInnerHtml = `
//         <tr>
//             <td>Vasya</td>
//             <td>Petrov</td>
//         </tr>
//         <tr>
//             <td>Vasya</td>
//             <td>Petrov</td>
//         </tr>`;
// // todo корректно сформировать контент tbody
// tbody.innerHTML = tbodyInnerHtml;
// table.appendChild(tbody);
//
// let body = document.body;
// body.appendChild(table);


debugger;
let table = document.createElement('table');
let thead = document.createElement('thead');
let tr = document.createElement('tr');
for (let persona of persons) {
    for (let key in persona) {
        let th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    }
}
thead.appendChild(tr);
table.appendChild(thead);

let tbody = document.createElement('tbody');
let trBody = document.createElement('tr');
let personaValue;
for (let persona of persons) {
    for (let key in persona) {
        let tdBody = document.createElement('td');
        personaValue = persona[key];
        tdBody.innerText = personaValue;
        trBody.appendChild(tdBody);
    }
}
tbody.appendChild(trBody);
table.appendChild(tbody);
let body = document.body;
body.appendChild(table);

