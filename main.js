const add = document.querySelector('.add');
const input = document.querySelector('.input')
const list = document.querySelector('.list');
const form = document.getElementsByTagName('form');
let numItems = 0;

input.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        add.click();
    }
})
add.addEventListener('click', () => {
    const task = input.value;
    let valid = false;
    for (let i = 0; i < task.length; i++) {
        if (task[i] != '' && task[i] != ' ') {
            valid = true;
            break;
        }
    }
    if (valid) addToList(task);
})

//creates new task
function addToList(task) {
    numItems++;
    const div = document.createElement('div');
    const p = document.createElement('p');
    const trash = document.createElement('span');

    p.innerHTML = task;
    p.setAttribute('id', `e${numItems}`);
    trash.setAttribute('class', `material-icons trash`);
    trash.setAttribute('id', `${numItems}`);
    trash.innerHTML = 'clear';
    div.append(p);
    div.append(trash);
    list.append(div);

    input.value = '';

    //Add event lister to all delete icons each time a new task is added
    let deleteIcons = document.querySelectorAll('.trash');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            let idd = icon.id;
            let p = document.querySelector(`#e${idd}`);
            p.style.textDecoration = "line-through";
            p.style.color = '#3C3C3C';
            icon.classList.add('animate__animated', 'animate__backOutRight');
            setTimeout(() => {
                icon.remove();  
            }, 500);
            
           
        })
    })
}