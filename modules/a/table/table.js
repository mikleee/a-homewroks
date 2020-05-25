let arrayPersons = []

let persona1 = {
    'name': 'Vasya',
    'surname': 'Vetrov'
};
let persona2 = {
    'name': 'Anna',
    'surname': 'Pavlova'
};
let persona3 = {
    'name': 'Petr',
    'surname': 'Petrov'
};
let persona4 = {
    'name': 'Viktor',
    'surname': 'Pavlik'
};
let persona5 = {
    'name': 'Pavlo',
    'surname': 'Zibrov'
};
let persona6 = {
    'name': 'Masha',
    'surname': 'Pirogova'
};
let persona7 = {
    'name': 'Vanya',
    'surname': 'Ivanon'
};
let persona8 = {
    'name': 'Ananas',
    'surname': 'Ananasov'
};
let
    persona9 = {
        'name': 'Lemon',
        'surname': 'Lemonov'
    };
let persona10 = {
    'name': 'Tomat',
    'surname': 'Pomidorov'
};
arrayPersons[0] = persona1
arrayPersons[1] = persona2
arrayPersons[2] = persona3
arrayPersons[3] = persona4
arrayPersons[4] = persona5
arrayPersons[5] = persona6
arrayPersons[6] = persona7
arrayPersons[7] = persona8
arrayPersons[8] = persona9
arrayPersons[9] = persona10
debugger;
let table = `<table style="border: 2px blueviolet solid">`;
table += `<thead><tr>`;
for (let persona of arrayPersons) {
    for (let key in persona)
        table += `<td>${key}</td>`;
}
table += `</tr></thead>`;

table += `<tbody><tr>`;

