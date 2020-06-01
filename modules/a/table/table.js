let persons = [
    {surname: 'Vetrov', name: 'Vasya'},
    {name: 'Vasya', surname: 'Vetrov'},
    {name: 'Anna', surname: 'Pavlova'},
    {name: 'Petr', surname: 'Petrov'},
    {name: 'Viktor', surname: 'Pavlik'},
    {name: 'Pavlo', surname: 'Zibrov'},
    {name: 'Masha', surname: 'Pirogova'},
    {name: 'Vanya', surname: 'Ivanon'},
    {name: 'Ananas', surname: 'Ananasov'},
    {name: 'Lemon', surname: 'Lemonov', age: 22},
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
thead.innerHTML = `
        <tr>
            <th>Name</th>    
            <th>Surname</th>  
            <th>Age</th>   
        </tr>`;
table.appendChild(thead);

let tbody = document.createElement('tbody');

for (let persona of persons) {
    let trBody = document.createElement('tr');
    debugger;
    // let tdBody = document.createElement('td');
    // tdBody.innerText = persona.name;
    // trBody.appendChild(tdBody);
    //
    // let tdBody2 = document.createElement('td');
    // tdBody2.innerText = persona.surname;
    // trBody.appendChild(tdBody2);

    let keys = ['name', 'surname', 'age'];
    for (let key of keys) {
        let tdBody = document.createElement('td');
        tdBody.innerText = persona[key] == undefined ? '' : persona[key];
        trBody.appendChild(tdBody);
    }

    // for (let key in persona) {
    //     let tdBody = document.createElement('td');
    //     tdBody.innerText = persona[key];
    //     trBody.appendChild(tdBody)
    // }
    tbody.appendChild(trBody);
}
debugger;
table.appendChild(tbody);
let body = document.body;
body.appendChild(table);



