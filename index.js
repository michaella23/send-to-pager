const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.key');

const phoneDisplay = document.querySelector(".phone-display");
const pagerDisplay = document.querySelector(".pager-display");

keys.forEach(key => {
    key.addEventListener('click', () => handleClick(key.id));
})

function handleClick(id) {
    let number = phoneDisplay.textContent;
    if (id === "reset") {
        pagerDisplay.textContent = "";
        phoneDisplay.textContent = "";
    } else if (id === "send") {
        setTimeout(() => {
            phoneDisplay.textContent = "";
            pagerDisplay.textContent = number;
            youWerePaged();  
        }, 2000) 
    } else {
        phoneDisplay.textContent += id;
    }
};

const youWerePaged = () => new Audio("assets/pager.wav").play();