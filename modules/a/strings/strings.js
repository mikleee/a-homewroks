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

// тестируем функцию stringContains
// alert(stringContains('hujh', 'j'));

// комната -> str
// коробка -> символ а
// грузчик -> replace

/**
 * функция проверет сдержит ли строка string подстроку searchValue и если содержит, заменяеет ее на replaceValue.
 * Поменяет все searchValue на replaceValue
 */
function replaceAll(string, searchValue, replaceValue) {
    let contains = stringContains(string, searchValue);
    let result = string;
    while (contains == true) {
        result = result.replace(searchValue, replaceValue);
        contains = stringContains(result, searchValue);
    }
    return result;
}

// тестируем функцию replaceAll
// alert(replaceAll('fgfgf', 'f', 'h'));
// alert(replaceAll('aa', 'b', 'c'));

function generateRandomString(maxLength) {
    let symbols = 'abcdifghjklmnopqr';
    let result = '';
    while (result.length < maxLength) {
        // определяем случайный символ
        let symbol = symbols.charAt(Math.floor(Math.random() * maxLength))
        result += symbol;
    }
    return result
}

// тестируем функцию generateRandomString
// let randomString = generateRandomString(100);
// alert('случайная строка ' + randomString + ' ее длинна ' + randomString.length);