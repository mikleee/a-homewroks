function DepartmentsService() {
    let id = 0;
    let data = {};


    this.getDepartments = getDepartments;
    this.getDepartmentById = getDepartmentById;
    this.createDepartment = createDepartment;
    this.updateDepartment = updateDepartment;
    this.deleteDepartment = deleteDepartment;

    function getDepartments() {
        let result = [];
        for (let v of Object.values(data)) {
            result.push(merge({}, v, ['id', 'created', 'name', 'description']));
        }
        return result;
    }

    function createDepartment(department) {
        let result = merge({id: ++id, created: new Date()}, department, ['name', 'description']);
        data[result.id] = result;
        return Object.assign(result);
    }

    function updateDepartment(department) {
        let existing = _findDepartment(department.id);
        merge(existing, department, ['name', 'description']);
        return Object.assign(existing);
    }

    function getDepartmentById(department) {
        let existing = _findDepartment(department.id);
        return Object.assign(existing);
    }

    function deleteDepartment(department) {
        let existing = _findDepartment(department.id);
        delete data[existing.id];
    }


    function _findDepartment(id) {
        if (id == undefined) {
            throw `id is undefined`;
        }

        let existing = data[id];
        if (existing == null) {
            throw `no department found with id ${id}`;
        }

        return existing;
    }

    function merge(target, source, fields) {
        for (let field of fields) {
            target[field] = source[field];
        }
        return target;
    }


}