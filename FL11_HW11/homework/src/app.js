let rootNode = document.getElementById('root');
let addButtone = document.getElementById('add-button');
let taskList = document.getElementById('toDoList');
let addInput = document.getElementById('get-text');
let checkbox = document.querySelectorAll('input[type="checkbox"');
addButtone.onclick = function() {
    if (addInput.value !== '') {
        let item = document.createElement('div');
        item.classList.add('inline-item');
        item.innerHTML = `<div class="deal hidden">
            <input type="text" class="edition">
            <i class="material-icons save">save</i>
        </div>
        <div class='deal edit'>
        <div class='task'>
            <input type="checkbox">
            <li class="list-item">${addInput.value}</li>
            <i class="material-icons edit">create</i>
        </div>
            <i class="material-icons delete">delete</i>
        </div>`;
        taskList.appendChild(item);
        addInput.value = '';
    }
}
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox'){
        e.target.disabled = true;
    } 

});
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('edit')) {
        if (e.target.parentElement.parentElement.parentElement.childNodes[0].nodeName === '#text') {
            e.target.childNodes[0].nextSibling.style.display = 'flex';
        } else {
            e.target.parentElement.parentElement.parentElement.childNodes[0].style.display = 'flex';
        }
        e.target.parentElement.parentElement.style.display = 'none';
    }
    if (e.target.classList.contains('save')) {
        if (e.target.previousElementSibling.value !== '') {
            e.target.parentElement.nextElementSibling.childNodes[1].childNodes[3].innerText = 
            e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = '';
            e.target.parentElement.style.display = 'none';
            e.target.parentElement.nextElementSibling.style.display = 'flex';
        }
    }
});
