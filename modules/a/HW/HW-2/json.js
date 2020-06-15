// <body>
//      <div>
//          <span>Enter a data please:</span><br/>
//          <input type='text' id='name'>
//           <input type='text' id='surname'>
//     </div>
//     <div>
//           <button id='ok'>OK</button>
//           <button id='cancel'>Cancel</button>
//     </div>
//  </body>


let obj = {
    "tagName": "body",
    "subTags": [
        {
            "tagName": "div",
            "subTags": [
                {
                    "tagName": "span",
                    "text": "Enter a data please:",
                },
                {
                    "tagName": "input",
                    "attrs": {
                        "type": "text",
                        "id": "name",
                    },
                },
                {
                    "tagName": "input",
                    "attrs": {
                        "type": "text",
                        "id": "surname",
                    },
                },
            ]
        },
        {
            "tagName": "div",
            "subTags": [
                {
                    "tagName": "button",
                    "attrs": {
                        "id": "ok",
                    },
                    "text": "OK",
                },
                {
                    "tagName": "button",
                    "attrs": {
                        "id": "cancel",
                    },
                    "text": "Cancel",
                },
            ]
        }
    ]
};

//
// Выведите значения текста во второй кнопке, используя . и [].
// Выведите значение атрибута id во втором input, используя . и [].

alert(obj["subTags"][1]["subTags"][1]["text"]);
alert(obj["subTags"][0]["subTags"][2]["attrs"]["id"]);


// declarative fields

// var text = "Enter a number";
// var arr3 = [+prompt(text), +prompt(text), +prompt(text)]; //вводим числа.

var notebook = {
    brand: prompt("Enter a brand"),
    type: prompt("Enter a type"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter a ram"),
    size: prompt("Enter a size"),
    weight: +prompt("Enter a weight"),
    resolution: {
        width: +prompt("Enter a weight"),
        height: +prompt("Enter a height"),
    },
};

var phone = {
    brand: prompt("Enter a brand"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter a ram"),
    color: prompt("Enter a color"),
};

var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: confirm("Enter you married"),
};

console.log(notebook);
console.log(phone);
console.log(person);
