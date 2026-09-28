// DOM Element Selectors
const counterValue = document.getElementById('counterValue');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');

let count = 0;

function updateCounterDisplay() {
    counterValue.textContent = count;
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounterDisplay();
});

decreaseBtn.addEventListener('click', () => {

    if (count > 0) {
        count--;
        updateCounterDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounterDisplay();
});


themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});
