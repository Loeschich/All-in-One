function updateClock() {
  const now = new Date();
  const date = now.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const time = now.toLocaleTimeString('de-DE', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  const clockElement = document.getElementById('datetime');
  if (clockElement) {
    clockElement.textContent = `${date} – ${time}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// Tabs
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

// To-Dos
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (!task) return;

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

document.addEventListener('DOMContentLoaded', () => {
  loadTodos();
});
