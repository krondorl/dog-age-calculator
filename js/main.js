"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const yearsInput = document.querySelector('#years');
    const calculateButton = document.querySelector('#calculate-button');
    const resultSpan = document.querySelector('#result');

    const round = (n) => Math.round(n * 10) / 10;
    const calculateDogAge = (age) => 16 * Math.log(age) + 31;

    calculateButton.addEventListener("click", () => {
        const inputValue = yearsInput.value;
        if (inputValue !== undefined && inputValue >= 1) {
            resultSpan.innerHTML = round(calculateDogAge(parseInt(inputValue)));
        }
    });
});