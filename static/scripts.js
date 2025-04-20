function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
  clock.textContent = now.toLocaleString("de-DE", options);
}

setInterval(updateClock, 1000);

function showTab(id) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

// Wetter abrufen
function fetchWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=50.09&longitude=11.83&current_weather=true";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const weather = data.current_weather;
      const code = weather.weathercode;
      const temp = weather.temperature;
      const icon = mapWeatherCodeToIcon(code);
      const text = mapWeatherCodeToText(code);

      document.getElementById('weather-icon').textContent = icon;
      document.getElementById('weather-text').textContent = `${temp}°C – ${text}`;
    })
    .catch(() => {
      document.getElementById('weather-text').textContent = "⚠️ Wetter konnte nicht geladen werden.";
    });
}

function mapWeatherCodeToIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 99) return "⛈️";
  return "❓";
}

function mapWeatherCodeToText(code) {
  if (code === 0) return "Sonnig";
  if (code <= 3) return "Leicht bewölkt";
  if (code <= 48) return "Nebelig";
  if (code <= 67) return "Regnerisch";
  if (code <= 77) return "Schnee";
  if (code <= 99) return "Stürmisch";
  return "Unbekannt";
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  fetchWeather();
});
