import { sum, square } from './math';

var element = document.getElementById('root');

element.innerHTML = `sum 3 + 5 = ${sum(3, 5)} and square of 2 = ${square(2)}`;
