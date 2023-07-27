var form = document.querySelector('form');
var  ul = document.querySelector('ul');
var search = document.getElementById('search');

form.addEventListener('submit', addTask);
ul.addEventListener('click', removeTask);
search.addEventListener('keyup', searchTask);

function addTask(e) {
    e.preventDefault();

    if(document.getElementById('task').value === '') // checks if the input is written before submission
        alert('No task written!');
    
    else{
        // creating new li with the text and button
        var li = document.createElement('li');
        // new button
        var btn = document.createElement('button');
        btn.className = 'remove';
        
        // creating the text for the button
        var btnText = document.createTextNode('remove');

        // creating the text for the li
        var taskText = document.createTextNode(document.getElementById('task').value);
        
        // appending the btnText to the btn
        btn.appendChild(btnText);

        li.appendChild(taskText);
        li.appendChild(btn);

        ul.appendChild(li); // appends the whole li to the ul
        document.getElementById('task').value = ''; // emptying the input   
    }
}

function removeTask(e) {
    e.preventDefault();

    if(e.target.classList.contains('remove')) {
        ul.removeChild(e.target.parentElement);
    }
}

function searchTask(e) {
    e.preventDefault();

    var searchText = e.target.value.toLowerCase();
    
    Array.from(ul.children).forEach((item) => {
        if(item.firstChild.textContent.substring(0,searchText.length) != searchText) {
            item.style.display = 'none';
        }
        else {
            item.style = 'display: flex; justify-content: space-between';
        }
    });
}

