const form = document.querySelector('#task-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const list = document.querySelector('.task-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td><input type="radio" class="completed"></td>
                    <td>${title}</td>
                    <td>${description}</td>
                    <td><button href="#" class="delete">X</button></td>`;
    list.appendChild(row);
    document.querySelector('#title').value = " ";
    document.querySelector('#description').value = " ";
})
document.querySelector('.task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.classList.contains('completed')) {
        e.target.parentElement.parentElement.classList.add('line');
    }
})