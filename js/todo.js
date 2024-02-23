const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");


let toDos = []

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != li.id)
    localStorage.setItem("todos", JSON.stringify(toDos));
}

const paintToDo = (newToDoObj) => {
    // 그려주는 작업
    const li = document.createElement("li");
    const span = document.createElement("span"); 
    const button = document.createElement("button"); 
    /*
    <li id={newToDoObj.id}>
        <span>{newToDo}</span>
        <button>delete</button>
    </li>
    */
    li.id = newToDoObj.id
    li.appendChild(span); 
    li.appendChild(button); 

    span.innerText = newToDoObj.text;
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)

    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        id: Date.now(), 
        text: newToDo
    }

    paintToDo(newToDoObj);
    toDos.push(newToDoObj);  
    localStorage.setItem("todos", JSON.stringify(toDos))
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}
