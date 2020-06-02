let departmentsArr = [
    {id: 1, created: 'Tue Jun 02 2020 22:37:59 GMT+0300 (Восточная Европа, летнее время)', name: "HR", description: 'manages human resources'},
    {id: 2, created: 'Tue Jun 02 2020 22:37:59 GMT+0300 (Восточная Европа, летнее время)', name: 'Security', description: 'responsible for safety'}
];

let table = document.createElement('table');
table.classList.add('wrapper');

let thead = document.createElement('thead');
thead.innerHTML = `
        <tr>
            <th>Id</th>    
            <th>Created</th>    
            <th>Name</th>    
            <th>Description</th>    
            <th></th>    
        </tr>`;
table.appendChild(thead);

let tbody = document.createElement('tbody');

for (let department of departmentsArr) {
    let tr = document.createElement('tr');
    let tdBut = document.createElement('td')
    debugger;
    for (let key in department) {
        let td = document.createElement('td');

        if (key.includes('created')) {
            td.innerText = renameDate(department[key]);
            tr.appendChild(td);
        } else {
            td.innerText = department[key];
            tr.appendChild(td);
        }

    }
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    tdBut.appendChild(deleteButton);
    tr.appendChild(tdBut);
    tbody.appendChild(tr);
}

table.appendChild(tbody)
let body = document.body;
body.appendChild(table);


function renameDate(data) {
    return data.toLocaleString()
}

