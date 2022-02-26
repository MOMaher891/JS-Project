// Mouse Events
//---------------
// one click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
// card.addEventListener('mousemove', runEvent);

const form = document.querySelector('#form-task')
const tasklist = document.querySelector('.collection');
const takeTask = document.querySelector('.add-task');
const submitBTN = document.querySelector('.submit-task');
const filterTask = document.querySelector('.filter');
const clearBTN = document.querySelector('.clear-task');
const label = document.querySelector('.lab');


// submitBTN.addEventListener('click', AddTask)

addEvent();
function addEvent() {
    form.addEventListener('submit', AddTask)
    clearBTN.addEventListener('click', ClearTask)
    filterTask.addEventListener('keyup', FilterTask)

}

function AddTask(e) {
    if (takeTask.value === "") {
        alert("Add a Task")
    } else {
        // console.log(takeTask.value)
        const li = document.createElement('li');
        li.className = "collection-item";
        // form.appendChild(document.createTextNode(takeTask.value));
        li.appendChild(document.createTextNode(takeTask.value))
        tasklist.appendChild(li)
    }

    storeTaskOnLocalStorage(takeTask.value)

    e.preventDefault();
}



function ClearTask() {
    // tasklist.innerHTML = '';
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild)
    }
}

function FilterTask(e) {
    const text = e.target.value.toLowerCase();

    //forEach : loop on your element
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none'

        }
    });



    // console.log(text)

}


function storeTaskOnLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


// submitBTN.addEventListener('click', () => {
//     label.style.transform = translateY('-10px');
// })