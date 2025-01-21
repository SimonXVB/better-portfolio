const arrows = document.getElementsByClassName("hero-arrow");
const buttons = document.getElementsByClassName("hero-button");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", () => {
        for(let j = 0; j < arrows.length; j++) {
            arrows[j].style.animation = `arrows 1s linear ${j / 6}s infinite`
        }
    });

    buttons[i].addEventListener("mouseout", () => {
        for(let j = 0; j < arrows.length; j++) {
            arrows[j].style.animation = "none"
        }
    });
};