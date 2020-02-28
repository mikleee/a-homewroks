function Form(container, data, okCallback, cancelCallback) {
    this.okCallback = okCallback;
    this.cancelCallback = cancelCallback;
    this.data = data || {};
    this.validators = {};

    /**
     *  копируем данные, которые были в саммо начале
     *  это нам понадобиться, когда мы будем сбрасывать форму к начальным значениям
     */
    let initialData = Object.assign({}, this.data);
    /**
     *  в этом обьекте будут храниться все инпуты в виде ключ -> инпут
     *  нам нужно потом будет по ним итерироваться
     */
    let inputs = {};


    /**
     *  добавляем главный элемент формы в вёрстку
     */
    let formBody = document.createElement('div');
    container.appendChild(formBody);


    /**
     *  добавляем инпуты
     */
    for (let key of Object.keys(this.data)) {
        let validationMessage = new ValidationMessage();

        let mandatory;
        let nameForHtml;
        if (key.startsWith('*')) {
            mandatory = true;
            nameForHtml = key.substring(1);
        } else {
            mandatory = false;
            nameForHtml = key;
        }

        let input = new Input(nameForHtml, this.data[key]);
        inputs[key] = input;

        let label = document.createElement('label');
        label.setAttribute('for', input.element.id);
        if (mandatory) {
            label.innerHTML = `<span style="color: red">*</span> <span>${nameForHtml}</span>`;
        } else {
            label.innerHTML = `<span>${nameForHtml}</span>`;
        }

        /**
         *  добавляем инпут со всеми сопутсвующими его элементами в вёрстку
         */
        let wrapper = document.createElement('div');
        formBody.appendChild(wrapper);
        wrapper.appendChild(label);
        wrapper.appendChild(input.element);
        wrapper.appendChild(validationMessage.element);


        input.oninput = (event, value) => {
            console.log(`input ${key} changed: '${this.data[key]}' => '${value}'`);

            /**
             * модифицируем обьект с даными
             */
            this.data[key] = value;

            /**
             * валидируем поле
             */
            let errorMessage = '';

            /**
             * проверяем обязательное ли поле
             */
            if (mandatory) {
                if (value == null || value === '') {
                    errorMessage = 'This field is mandatory'
                }
            }

            if (errorMessage === '') {
                /**
                 *  1. пробуем найти функцию валидатор, она должна вернуть true либо текст в ошибкой
                 *  2. если она есть, то запускаем еёб если нет, то считаем, что инпут не надо валидировать
                 */
                let validator = this.validators[key];
                if (typeof validator === 'function') {
                    let result = validator(this.data[key], key, this.data, input.element);
                    if (result !== true) {
                        errorMessage = result;
                    }
                }
            }

            /**
             *  если есть ошибка валидации, то
             *      1. мы ставим флажок valid у инпута = false
             *      2. красим инпут в красный цвет
             *      3. показываем валидационное сообщение
             *
             *  если есть ошибка валидации отсутсвует, то
             *      1. мы ставим флажок valid у инпута = true
             *      2. убираем с инпута цвет
             *      3. скрываем валидационное сообщение
             */
            if (errorMessage === '') {
                input.valid = true;
                input.element.style.color = null;
                validationMessage.hideValidationMessage();
            } else {
                input.valid = false;
                input.element.style.color = '#ff0000';
                validationMessage.showValidationMessage(errorMessage);
            }
        };

        /**
         * валидируем начальное значение
         */
        input.oninput(null, this.data[key]);
    }


    /**
     *  добавляем в вёрстку контейнер для кнопок
     */
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'btn-group';
    formBody.appendChild(buttonsContainer);

    /**
     *  добавляем кнопку OK в вёрстку
     */
    let okButton = document.createElement('button');
    okButton.innerHTML = 'OK';
    okButton.onclick = (event) => {
        if (typeof this.okCallback === 'function') {
            /**
             *  проверяем валидна ли форма
             *  для этого нужно проитерироваться по всем инпутам и проверить валидны ли они
             *  если, хоть один, не валидный, тогда считаем, что вся форма не валидна
             */
            let valid = true;
            for (let input of Object.values(inputs)) {
                if (!input.valid) {
                    // если невалидный, тогда вся форма невалидна и нет смысла проверять следующие
                    valid = false;
                    break;
                }
            }
            if (valid) {
                // если форма валидна то запускаем переданный нам okCallback
                this.okCallback(this.data);
            }
        }
    };
    buttonsContainer.appendChild(okButton);


    /**
     *  добавляем кнопку Cancel в вёрстку
     */
    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.onclick = (event) => {
        for (let [key, input] of Object.entries(inputs)) {
            let value = initialData[key];
            input.setInputValue(value);
            input.oninput(null, value);
        }
        if (typeof this.cancelCallback === 'function') {
            this.cancelCallback(event);
        }
    };
    buttonsContainer.appendChild(cancelButton);

}


function Input(name, value) {
    this.element = document.createElement('input');
    this.oninput = null;
    /**
     * функция устанавливает значение в инпут,
     * она определиться ниже, в зависимости от типа инпута
     **/
    this.setInputValue = null;
    /**
     * функция читает значение из инпута,
     * она определиться ниже, в зависимости от типа инпута
     **/
    this.getInputValue = null;

    this.element.type = defineInputType(value);
    this.element.id = name;
    this.element.name = name;
    switch (this.element.type) {
        case 'checkbox':
            this.setInputValue = (value) => this.element.checked = value;
            this.getInputValue = () => this.element.checked;
            break;
        case 'date':
            this.setInputValue = (value) => this.element.value = value;
            this.getInputValue = () => this.element.value;
            break;
        default:
            this.setInputValue = (value) => this.element.value = value;
            this.getInputValue = () => this.element.value;
            this.element.placeholder = name;
    }
    // устанасвливаем начальное занчение
    this.setInputValue(value);

    this.element.oninput = (event) => {
        if (typeof this.oninput === 'function') {
            // вычитываем текущее значение и передаём его вторым аргументом в функцию обработчик
            let value = this.getInputValue();
            this.oninput(event, value);
        }
    };


    /**
     * определяем тип инпута, взависимости от его занчения
     */
    function defineInputType(initialValue) {
        if (typeof initialValue === 'boolean') {
            return 'checkbox';
        } else if (initialValue instanceof Date) {
            return 'date';
        } else {
            return 'text';
        }
    }

}


function ValidationMessage() {
    this.element = document.createElement('small');


    this.showValidationMessage = (message) => {
        this.element.innerText = message;
        this.element.style.display = null
    };

    this.hideValidationMessage = () => {
        this.element.innerText = null;
        this.element.style.display = 'none'
    }
}