//Getting elements

const inputField = document.getElementById('inp');
const addButton = document.getElementById('addBtn');
const tasks = document.querySelector('.tasks');

//Testing
console.log(inputField)
console.log(addButton)
console.log(tasks)


//Eventlistener

addButton.addEventListener("click",(e)=>{
    if(inputField.value === ''){
        alert('You have to type something')
    }
    else{
        //Creating the parent element
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('task-item');
        //Creating the to do text
        const todoText = document.createElement('p');
        todoText.textContent = inputField.value;
        //Creating the delete button
        const todoDelete = document.createElement('button');
        todoDelete.textContent = '-';

        tasks.appendChild(todoContainer);
        todoContainer.appendChild(todoText);
        todoContainer.appendChild(todoDelete);
        //Delete event
        todoDelete.addEventListener("click",(e)=>{
            tasks.removeChild(todoContainer);
        })
    }    
})
