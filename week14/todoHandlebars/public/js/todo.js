$(document).ready(function() {
    const todoField = $('#todoField');
    const addTodoBtn = $('#addTodoBtn');

    addTodoBtn.on('click', function(event) {
        event.preventDefault();
        await $.post('/api/todos', {
            task: todoField.val(),
        });
        window.location.reload();
    })
});