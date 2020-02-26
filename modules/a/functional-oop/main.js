/**
 * подписываемя на событиеб когда всё отгрузится
 * это позволяет нам расположить наш js в head
 */
window.addEventListener('load', (event) => {
    debugger;
    let container = document.getElementById('formContainer');

    let okCallback = (data) => {
        console.log('Ok ' + JSON.stringify(data));
    };

    let cancelCallback = () => {
        console.log('cancel')
    };

    let data = {
        name: 'Anakin',
        surname: 'Skywalker',
        married: true,
        birthday: new Date((new Date).getTime() - 86400000 * 30 * 365)
    };


    let form = new Form(
        container,
        data,
        okCallback,
        cancelCallback
    );


    form.validators.surname = (value, key, data, input) => value.length > 2 &&
    value[0].toUpperCase() == value[0] &&
    !value.includes(' ') ? true : 'Wrong name';

    console.log(form)
});