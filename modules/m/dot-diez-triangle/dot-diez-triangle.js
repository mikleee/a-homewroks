(function () {
    let linesCount = prompt('enter lines count (число писло)');
    // linesCount - количесиво линий

    //определяем какая ширина строчки будет
    let length = 2 * linesCount + 1;

    // строим двумерный массив
    let rows = [];
    for (let lineNumber = 0; lineNumber <= linesCount; lineNumber++) {
        let row = '';
        let diezCount = lineNumber * 2 + 1;

        while (row.length < diezCount) {
            row += '#';
        }

        while (row.length < length) {
            row = `.${row}.`;
        }
        rows.push(row);
    }

    //формируем строку
    let stringResult = rows.join('\n');

    //отрисуем строку, когда страничка загрузится
    window.addEventListener('load', function () {
        let pre = document.createElement('pre');
        document.body.appendChild(pre);
        pre.innerText = stringResult;
    });


})();