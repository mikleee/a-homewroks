let str = 'aba';
let str1 = str.replace('a', 'x');

/**
 * функуия проверяет соержит ли строка string подсроку searchValue
 * если содержит, то ункция вернет true, ели не соержит, то функция верент false
 */
function stringContains(string, searchValue) {
    if (string.indexOf(searchValue) >= 0) {
        return true;
    } else {
        return false;
    }
}

// комната -> str
// коробка -> символ а
// грузчик -> replace

debugger;
let contains = stringContains(str, 'a');
let result = str;
while (contains == true) {
    debugger;
    result = result.replace('a', 'x');
    contains = stringContains(result, 'a');
}
alert(result);

//
// alert(str1);
// alert(str);
// alert(str);