document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_task.value);
    form.reset()
  })
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let editBtn = document.createElement('button');

  btn.addEventListener('click', removeItem)
  btn.textContent = 'x'
  editBtn.addEventListener('click', editItem);
  editBtn.textContent = 'Edit';

  p.textContent = `${todo} `
  p.appendChild(btn)
  p.appendChild(editBtn);
  
  document.querySelector('#list').appendChild(p)
}

function removeItem (e){
  e.target.parentNode.remove()
}

function editItem(e) {
  let newText = prompt('Enter new task description:');
  if (newText !== null) {
    e.target.parentNode.textContent = newText;
  }
}