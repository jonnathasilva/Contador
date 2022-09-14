let bnt = document.getElementById("bnt");
let section = document.getElementById("section-01");
let Section = document.getElementById("section-02");
let volta = document.getElementById("volta");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const newDate = new Date();
const MONTH = String(newDate.getMonth() + 1).padStart(2, "0");
const DAY = newDate.getDate().toString().padStart(2, "0");
const YEAR = newDate.getFullYear();

let x = setInterval(() => countDown(), second);
let date_end;
let count_down;

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById("days").innerText = Math.floor(diff / day);
  document.getElementById("hours").innerText = Math.floor((diff % day) / hour);
  document.getElementById("minutes").innerText = Math.floor(
    (diff % hour) / minute
  );
  document.getElementById("seconds").innerText = Math.floor(
    (diff % minute) / second
  );
}

function resetCountdown() {
  date_end = document.form_main.date_end.value;

  if (date_end > `${YEAR}-${MONTH}-${DAY}` && date_end !== undefined) {
    count_down = new Date(`${date_end} 00:00:00`).getTime();
    x = setInterval(() => countDown(), second);
  }
}

bnt.addEventListener("click", () => {
  if (date_end > `${YEAR}-${MONTH}-${DAY}` && date_end !== undefined) {
    section.style.display = "none";
    Section.style.display = "flex";
  } else {
    alert("uma data que não tenha passada tem que ser selecionada!");
  }
});

volta.addEventListener("click", () => {
  section.style.display = "grid";
  Section.style.display = "none";
});
