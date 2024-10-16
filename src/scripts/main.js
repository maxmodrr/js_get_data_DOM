'use strict';

// write your code here
const bodyElement = document.body;

const population = [...bodyElement.querySelectorAll('.population')];
const textTotal = bodyElement.querySelector('.total-population');
const textAverage = bodyElement.querySelector('.average-population');

const value = population.map((elem) => +elem.textContent.replaceAll(',', ''));

const total = value
  .reduce((sum, elem) => sum + elem, 0)
  .toLocaleString('en-Us');

const average = Math.round(total / value.length).toLocaleString('en-Us');

textTotal.textContent = total;
textAverage.textContent = average;
