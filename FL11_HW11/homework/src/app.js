let rootNode = document.getElementById("root");
let addBtn = document.getElementById('add-button');
let list = document.getElementById('task-list');
let addAction = document.getElementById('get-text');
let checkboxes = document.querySelectorAll('input[type="checkbox"');
addBtn.onclick = function() {
    if (addAction.value != "") {
        let item = document.createElement('slot');
        item.classList.add('tasks-list');
        item.innerHTML = `
        <div  class="edit-tasks hide">
                <div class="task-list_item hide">
                  <div class="task-list_item-check">
                      <input type="text" placeholder="let's kill cat">
                  </div>
                  <i class="material-icons save">save</i>
                </div>
              </div>

        <div class="task-list_item">
              <div class="task-list_item-check">
                  <input type="checkbox" class="checkbox" id="1">
                  <label>${addAction.value}</label>
              </div>
              <i class="material-icons edit">edit</i>
            </div>
            <i class="material-icons delete">delete</i>
        
   `;
        list.appendChild(item);
        addAction.value = "";
    }
}
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') e.target.disabled = true;

});
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('edit')) {
        if (e.target.parentElement.childNodes[0].nodeName == '#text') {
            e.target.parentElement.childNodes[0].nextSibling.style.display = 'flex';
        } else {
            e.target.parentElement.childNodes[0].style.display = 'flex';
        }
        e.target.parentElement.parentElement.style.display = 'none';
    }
    if (e.target.classList.contains('save')) {
        if (e.target.previousElementSibling.value !== '') {
            e.target.parentElement.nextElementSibling.childNodes[1].childNodes[3].innerText = e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = '';
            e.target.parentElement.style.display = 'none';
            e.target.parentElement.nextElementSibling.style.display = 'flex';
        }
    }
});
