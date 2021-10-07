let bnt = document.getElementById('bnt');
let section = document.getElementById('section-01');
let Section = document.getElementById('section-02');
let volta = document.getElementById('volta');

bnt.addEventListener('click', () => {
    section.style.display = 'none'
    Section.style.display = 'block'
});

volta.addEventListener('click', () => {
    section.style.display = 'grid'
    Section.style.display = 'none'
});

// =======================================================//

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let x = setInterval(() => countDown(), second);
let date_end ;
let count_down ;

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;
  
    document.getElementById('days').innerText = Math.floor(diff / day);
    document.getElementById('hours').innerText = Math.floor(diff % day / hour);
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
    document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
};

function resetCountdown() {
    date_end = document.form_main.date_end.value;
    count_down = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
};