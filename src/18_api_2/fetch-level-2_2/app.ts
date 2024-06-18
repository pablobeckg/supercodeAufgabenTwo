import { IToDo } from "./Contracts/IToDo";

function fetchToDos(): Promise<IToDo[]> {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}

function renderToDos(todos: IToDo[]): void {
  const todoList = document.getElementById('todo-list');
  if (todoList) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.className = `todo ${todo.completed ? 'completed' : 'not-completed'}`;
      todoItem.textContent = todo.title;
      todoList.appendChild(todoItem);
    });
  }
}

function filterToDos(todos: IToDo[], query: string): IToDo[] {
  return todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
}

document.addEventListener('DOMContentLoaded', () => {
  fetchToDos().then(todos => {
    todos = todos.sort((a, b) => a.title.localeCompare(b.title));
    renderToDos(todos);

    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
      const filteredToDos = filterToDos(todos, searchInput.value);
      renderToDos(filteredToDos);
    });
  });
});