window.addEventListener('turbolinks:load' , () => {
    let rawTasks = document.querySelector('#rawKanbanTasks');
    let tasks = [...rawTasks.children].map(el => {
        return [el.getAttribute('task_id'), el.getAttribute('task_name'), el.getAttribute('task_status')]
    });

    tasks.forEach(el => {
        let container = document.querySelector(`.${el[2]}`);
        let item = document.createElement('div');

        item.className = 'border rounded-1 m-3 p-2';
        item.textContent = el[1];

        container.appendChild(item);
    });

    rawTasks.remove();
});
