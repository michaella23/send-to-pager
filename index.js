const keypad = document.querySelector('.keypad');

const keys = document.querySelectorAll('.key')

const phoneDisplay = document.querySelector(".phone-display")
const pagerDisplay = document.querySelector(".pager-display")

keys.forEach(key => {
    key.addEventListener('click', () => handleClick(key.id));
})

function handleClick(id) {
    phoneDisplay.textContent += id;
};