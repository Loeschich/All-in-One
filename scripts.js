// ⏱️ Live Datum & Uhrzeit
function updateClock() {
  const now = new Date();
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const date = now.toLocaleDateString('de-DE', optionsDate);
  const time = now.toLocaleTimeString('de-DE', optionsTime);

  document.getElementById('datetime').textContent = `${date} – ${time}`;
}
setInterval(updateClock, 1000);
updateClock();

// 🔄 Tab-System
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// ✅ To-Do: Hinzufügen
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;
  li.onclick = () => {
    li.remove();
    saveTodos();
  };

  document.getElementById('todoList').appendChild(li);
  input.value = '';
  saveTodos();
}

// 💾 Speicherfunktionen für To-Dos
function saveTodos() {
  const items = [...document.querySelectorAll('#todoList li')].map(li => li.textContent);
  localStorage.setItem('todos', JSON.stringify(items));
}

function loadTodos() {
  const saved = JSON.parse(localStorage.getItem('todos') || '[]');
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  saved.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.onclick = () => {
      li.remove();
      saveTodos();
    };
    list.appendChild(li);
  });
}

// 🔃 Starte beim Laden
document.addEventListener('DOMContentLoaded', () => {
  loadTodos();
  showTab('overview');
});
