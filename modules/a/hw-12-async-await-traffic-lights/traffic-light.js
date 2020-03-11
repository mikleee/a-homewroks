async function trafficLight(trafficLightElement,
                            greenTime,
                            yellowTime,
                            redTime) {
    while (true) {
        //включаем зеленый
        await turnOnLight(trafficLightElement, greenTime, 'green');
        //включаем желтый
        await turnOnLight(trafficLightElement, yellowTime, 'yellow');
        //включаем красный
        await turnOnLight(trafficLightElement, redTime, 'red');
    }
}

async function pedestrianTrafficLight(trafficLightElement,
                                      greenTime,
                                      redTime) {
    while (true) {
        //включаем зеленый
        await turnOnLight(trafficLightElement, greenTime, 'green');
        //включаем красный
        await turnOnLight(trafficLightElement, redTime, 'red', trafficLightElement.querySelector('button'));
    }
}


function turnOnLight(trafficLightElement, ms, lightName, cancelButton) {
    let light = trafficLightElement.querySelector(`[traffic-light="${lightName}"]`);

    let promises = [];

    let promise1 = delay(ms);
    promises.push(promise1);

    if (cancelButton) {
        let promise2 = domEventPromise(cancelButton, 'click');
        promise2.then(function (event) {
            makeButtonDisabledFor(cancelButton, 15000);
        });
        promises.push(promise2);
    }

    let promise = Promise.race(promises);

    fireLight(light, promise);
    addTimerToLight(light, promise, ms);

    return promise;
}

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(ms);
        }, ms);
    });
}

function fireLight(light, promise) {
    let cssClass = light.className;
    light.className = cssClass + ' active';

    promise.then(function () {
        light.className = cssClass;
    });
}

function addTimerToLight(light, promise, ms) {
    let period = 100;
    let time = ms;

    light.innerText = stringifyMilliseconds(time);
    let intervalId = setInterval(function () {
        time -= period;
        light.innerText = stringifyMilliseconds(time);
    }, period);


    promise.then(function () {
        light.innerText = null;
        clearInterval(intervalId);
    })
}

function makeButtonDisabledFor(button, time) {
    button.disabled = true;
    let text = button.innerText;

    let period = 100;

    button.innerText = `${text} (${stringifyMilliseconds(time)})`;

    let intervalId = setInterval(function () {
        time -= period;
        if (time >= 0) {
            button.innerText = `${text} (${stringifyMilliseconds(time)})`;
        } else {
            button.disabled = false;
            button.innerText = text;
            clearInterval(intervalId);
        }
    }, period);
}

function stringifyMilliseconds(time) {
    return (time / 1000.).toFixed(1)
}


function domEventPromise(element, eventName) {
    return new Promise(function (resolve, reject) {
        element.addEventListener(eventName, function (event) {
            resolve(event);
            element.removeEventListener(eventName);
        });
    });
}