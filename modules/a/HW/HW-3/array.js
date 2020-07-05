let a = {
    name: 'Vasya',
    surname: 'Vasilev',
};
let b = {
    name: 'Fedya',
    surname: 'Fedorov',
};
let c = {};
a.age = 33;
b.fathername = 'Vasilevich';
c.sex = 'man';
let persons = [];
persons[0] = a;
persons[1] = b;
persons[2] = c;

d = {
    name: 'Masha',
    surname: 'Fedorovna',
};
persons[3] = d;


for (let value of persons) {
    console.log(value)
}


for (let value of persons) {
    for (let key in value) {
        if (key === "name" || key === 'surname') {
            console.log(value[key])
        }
    }
}


for (let value of persons) {
    for (let key in value) {
        if (key === "name" || key === 'surname') {
            value.fullName = ''
        }
    }
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
str += '</tr><tr>';


debugger
for (let objectData of persons) {
    for (let key in objectData) {
        let valueObject = objectData[key];
        if (valueObject == null) {
            valueObject = '';
        }
        str += `<td>${valueObject}</td>`
    }
    str += '</tr>'
}
str += '</table>';
document.write(str)

