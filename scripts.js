function showSection(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkmode', document.body.classList.contains('dark'));
});

window.onload = () => {
  if (localStorage.getItem('darkmode') === 'true') {
    document.body.classList.add('dark');
  }

  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();

  loadTodos();
};

function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  li.onclick = () => li.remove();
  list.appendChild(li);
  input.value = '';
  saveTodos();
}

function saveTodos() {
  const items = [...document.querySelectorAll('#todoList li')].map(li => li.textContent);
  localStorage.setItem('todos', JSON.stringify(items));
}

function loadTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  const items = JSON.parse(localStorage.getItem('todos') || '[]');
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.onclick = () => li.remove();
    list.appendChild(li);
  });
}
