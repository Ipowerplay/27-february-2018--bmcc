window.onload = function () {
    'use strict';

    let num1 = 20.5,
        num2 = 100,
        num3 = 25,
        sumOfNumbers = num1 + num2 + num3,
        productOfNumbers = num1 * num2 * num3;

    let body = document.querySelector(`body`),
        p = document.createElement(`p`),
        content = document.createTextNode(sumOfNumbers);

    p.appendChild(content);
    body.appendChild(p);
    alert(productOfNumbers);
};
