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
        {
            let tr = document.createElement('tr');

            let thId = document.createElement('th');
            thId.innerHTML = 'Id';
            tr.appendChild(thId);

            let thCreated = document.createElement('th');
            thCreated.innerHTML = 'Created';
            tr.appendChild(thCreated);

            let thName = document.createElement('th');
            thId.innerHTML = 'Name';
            tr.appendChild(thName);

            let thDescription = document.createElement('th');
            thId.innerHTML = 'Description';
            tr.appendChild(thDescription);

            let thActions = document.createElement('th');
            let addDepartmentButton = document.createElement('button');
            addDepartmentButton.innerText = 'Add';
            addDepartmentButton.onclick = function () {
                table.style.display = 'none';

                departmentsService.deleteDepartment(department);
                tr.remove();
            };
            tr.appendChild(thActions);

        }
        table.appendChild(thead);


        let tbody = document.createElement('tbody');
        for (let department of departments) {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);

            let tdId = document.createElement('td');
            tdId.innerHTML = department.id;
            tr.appendChild(tdId);

            let tdCreated = document.createElement('td');
            tdCreated.innerHTML = translateDate(department.created);
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
        }
        table.appendChild(tbody);

        return table;
    }

    function createDepartmentForm(department) {
        let container = document.createElement('div');
        container.setAttribute('id', 'departmentForm');

        if (department.id) {
            // id
            let idGroup = document.createElement('div');
            container.appendChild(idGroup);

            let idLabel = document.createElement('label');
            idLabel.innerHTML = 'Id';
            idGroup.appendChild(idLabel);

            let idSpan = document.createElement('span');
            idSpan.innerHTML = department.id;
            idGroup.appendChild(idSpan);

            // created
            let createdGroup = document.createElement('div');
            container.appendChild(createdGroup);

            let createdLabel = document.createElement('label');
            createdLabel.innerHTML = 'Created';
            createdGroup.appendChild(createdLabel);

            let createdSpan = document.createElement('inputSpan');
            createdSpan.innerHTML = translateDate(department.created);
            idGroup.appendChild(createdSpan);
        }

        // name
        let nameGroup = document.createElement('div');
        container.appendChild(nameGroup);

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = 'Name';
        nameLabel.setAttribute('for', 'departmentName');
        nameGroup.appendChild(nameLabel);

        let nameInput = document.createElement('input');
        nameInput.value = department.name;
        nameLabel.setAttribute('id', 'departmentName');
        nameGroup.appendChild(nameInput);


        // description
        let descriptionGroup = document.createElement('div');
        container.appendChild(descriptionGroup);

        let descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = 'Description';
        descriptionLabel.setAttribute('for', 'departmentDescription');
        descriptionGroup.appendChild(descriptionLabel);

        let descriptionInput = document.createElement('input');
        descriptionInput.value = department.description;
        descriptionLabel.setAttribute('id', 'departmentDescription');
        descriptionGroup.appendChild(descriptionInput);

        return container;
    }

    function translateDate(date) {
        return date.toLocaleString();
    }

})();







