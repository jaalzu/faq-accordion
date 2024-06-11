const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const p = document.querySelectorAll('.p');

for (let i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", () => {
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        p[i].classList.toggle("hidden");
    });
}

for (let i = 0; i < minus.length; i++){
    minus[i].addEventListener("click", () => {
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        p[i].classList.toggle("hidden");
    });
}