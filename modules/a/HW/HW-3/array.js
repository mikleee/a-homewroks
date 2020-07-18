let a = {
    name: 'Vasya',
    surname: 'Vasilev',
};
let b = {
    name: 'Fedya',
    surname: 'Fedorov'
};
let c = {};
a.age = 33;
b.fathername = 'Vasilevich';
c.sex = 'man';
let persons = [];
persons.push(a);
persons.push(b);
persons.push(c);

let d = {
    name: 'Masha',
    surname: 'Fedorovna'
};
persons.push(d);

let o = {
    name: 'gggleb'
};
persons.push(o);

let y = {
    surname: 'Borisovich'
};
persons.push(y);

for (let value of persons) {
    console.log(value)
}


for (let person of persons) {
    for (let key in person) {
        if (key === "name" || key === 'surname') {
            console.log(person[key])
        }
    }
}
debugger;

for (let person of persons) {
    if (person.name === undefined || person.surname === undefined) {
        person.fullName = '';
    } else person.fullName = person.name + ' ' + person.surname;
}


console.log(persons);


let JsonStr = JSON.stringify(persons);
console.log(JsonStr);

let JsonParse = JSON.parse('{"name":"Vasya","surname":"Vasilev", "age":33,"fullName":""}');
console.log(JsonParse);
persons[4] = JsonParse;

let keys = [];
let str = "<table border='1'><tr>";
for (let objectData of persons) {
    for (let key in objectData) {
        if (!keys.includes(key)) {
            keys.push(key);
        }
    }
}


for (let key of keys) {
    str += `<th>${key}</th>`
}
str += '</tr>';

for (let person in persons) {

    if (person % 2 == 0) {
        str += '<tr style="background-color: #6d26ef">';
    } else str += '<tr>';

    for (let key of keys) {

        let valueObject = persons[person][key];
        if (valueObject == null) {
            valueObject = '';
        }

        str += `<td>${valueObject}</td>`
    }
    str += '</tr>'
}
str += '</table>';
document.write(str)

