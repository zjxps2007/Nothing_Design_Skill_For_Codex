const root = document.documentElement;
const modeButton = document.querySelector("#modeButton");
const ventButton = document.querySelector("#ventButton");
const ventStatus = document.querySelector("#ventStatus");
const clock = document.querySelector("#clock");

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  clock.textContent = `${time} KST`;
  clock.dateTime = now.toISOString();
}

modeButton.addEventListener("click", () => {
  const isLight = root.dataset.theme !== "light";
  root.dataset.theme = isLight ? "light" : "dark";
  modeButton.textContent = `MODE / ${isLight ? "LIGHT" : "DARK"}`;
  modeButton.setAttribute("aria-pressed", String(isLight));
});

ventButton.addEventListener("click", () => {
  const isOpen = !ventButton.classList.contains("is-open");
  ventButton.classList.toggle("is-open", isOpen);
  ventButton.setAttribute("aria-pressed", String(isOpen));
  ventButton.setAttribute("aria-label", `${isOpen ? "Close" : "Open"} roof vent`);
  ventStatus.textContent = `[ ${isOpen ? "OPEN" : "CLOSED"} ]`;
});

updateClock();
setInterval(updateClock, 1000);
