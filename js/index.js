// Load DOM/web before execute the programm
document.addEventListener('DOMContentLoaded', function(){
    // Definition Area
    const title = document.getElementById('task');
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') +
        '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    let id = 0;

    // Main Programm
    // Remove Task.
    function removeToDo(id){
        document.getElementById(id).remove();
    }

    // Add Tasks To The To Do Table
    function addToDo() {
        if(title.value === '' || description.value === ''){
            console.error('All Fields Are Requiered');
            alert.classList.remove('d-none');
            alert.innerText ='All fields are required, please check it out!';
            alert.classList.add('text-center');
            return;
        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++)
        row.innerHTML = `
        <td class="text-center"><input type="checkbox"></td>
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">${priority.value}</td>
        <td class="text-center">${output}</td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;
        // Add Trash Button
        const btnRemove = document.createElement('button');
        btnRemove.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        btnRemove.innerHTML = '<i class="fa fa-trash"></i>';
        row.children[5].appendChild(btnRemove);
        btnRemove.onclick = function(e){
            removeToDo(row.getAttribute('id'));
        }
    }

    btn.onclick = function () {
        addToDo();
    }
})

