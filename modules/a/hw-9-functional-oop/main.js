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
        '*city': 'Malinovka',
        birthday: new Date((new Date).getTime() - 86400000 * 30 * 365)
    };


    let form = new Form(
        container,
        data,
        okCallback,
        cancelCallback
    );


    form.validators.surname = (value, key, data, input) => {
        if (value.length <= 2) {
            return 'surname is too short';
        } else if (value[0].toUpperCase() !== value[0]) {
            return 'surname should starts with a capital letter';
        } else if (value.includes(' ')) {
            return 'surname should not contain white space';
        } else {
            return true;
        }
    };

    console.log(form)
});