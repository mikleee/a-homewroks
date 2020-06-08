let departmentsArr = [
    {id: 1, created: new Date(56789), name: "HR", description: 'manages human resources', floor: 5},
    {id: 2, created: new Date(566689), name: 'Security', description: 'responsible for safety'},
    {id: 3, created: new Date(56788489), name: 'Security'}
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
    tr.classList.add('delete');


    for (let key of ['id', 'created', 'name', 'description']) {
        let td = document.createElement('td');

        let value = department[key];
        let resultText;

        if (value === undefined) {
            resultText = '';
        } else if (typeof value === 'object') {
            if (value instanceof Date) {
                resultText = renameDate(value);
            } else {
                resultText = value;
            }
        } else {
            resultText = value;
        }
        td.innerText = resultText;
        tr.appendChild(td);
    }
debugger;
    {   //создаем ячейку с кнопками
        let tdBut = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        tdBut.appendChild(deleteButton);
        tr.appendChild(tdBut);
        deleteButton.addEventListener('click', function () {
            let trDelete=document.getElementsByClassName('delete');
            trDelete[0].parentNode.removeChild(trDelete[0]);
        });
    }
    tbody.appendChild(tr);
}

table.appendChild(tbody);
let body = document.body;
body.appendChild(table);


function renameDate(data) {
    return data.toLocaleTimeString();
}

