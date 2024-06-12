const counterElement = document.createElement('div');
counterElement.id = 'counter';

const incrementButton = document.createElement('button');
incrementButton.id = 'increment'
incrementButton.textContent = '+';
const decrementButton = document.createElement('button');
decrementButton.id = 'decrement'
decrementButton.textContent = '-';
const resetButton = document.createElement('button');
resetButton.id = 'reset'
resetButton.textContent = 'Reset';

let count = 0;
const countElement = document.createElement('p');
countElement.textContent = count;

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
});

document.body.append(countElement);
document.body.append(counterElement);
counterElement.appendChild(decrementButton);
counterElement.appendChild(resetButton);
counterElement.appendChild(incrementButton);