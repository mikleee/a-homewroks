(function () {
    let departmentsService = new DepartmentsService();

    departmentsService.createDepartment({name: 'HR', description: 'manages human resources'});
    departmentsService.createDepartment({name: 'Security', description: 'responsible for safety'});

    let departments = departmentsService.getDepartments();
    let departmentsTable = createDepartmentsTable(departments);
    document.body.appendChild(departmentsTable);


    function createDepartmentsTable(departments) {
        let table = document.createElement('table');
        table.setAttribute('id', 'departments');

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
        for (let department of departments) {
            let tr = document.createElement('tr');

            let tdId = document.createElement('td');
            tdId.innerHTML = department.id;
            tr.appendChild(tdId);

            let tdCreated = document.createElement('td');
            tdCreated.innerHTML = tarnslateDate(department.created);
            tr.appendChild(tdCreated);

            let tdName = document.createElement('td');
            tdName.innerHTML = department.name;
            tr.appendChild(tdName);

            let tdDescription = document.createElement('td');
            tdDescription.innerHTML = department.description;
            tr.appendChild(tdDescription);

            let tdActions = document.createElement('td');

            let deleteDepartmentButton = document.createElement('button');
            deleteDepartmentButton.innerText = 'Delete';
            deleteDepartmentButton.onclick = function () {
                departmentsService.deleteDepartment(department);
                tr.remove();
            };
            tdActions.appendChild(deleteDepartmentButton);

            tr.appendChild(tdActions);

            tbody.appendChild(tr);
        }
        table.appendChild(tbody);

        return table;
    }

    function tarnslateDate(date) {
        return date.toLocaleString();
    }

})();







