// Datei: scripts.js

// Uhrzeit anzeigen
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('de-DE', options);
  const timeStr = now.toLocaleTimeString('de-DE');
  document.getElementById('datetime').textContent = `📅 ${dateStr} – 🕒 ${timeStr}`;
}
setInterval(updateClock, 1000);
updateClock();

// Tabs wechseln
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(el => el.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

// To-Do hinzufügen
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('todoList').appendChild(li);
    input.value = '';
  }
}
