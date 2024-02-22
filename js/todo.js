const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.querySelector("#todo-list");

let toDos = []

const paintToDo = (newToDo) => {
    // 그려주는 작업
    const li = document.createElement("li");
    const span = document.createElement("span"); 
    const button = document.createElement("button"); 
    /*
    <li>
        <span>{newToDo}</span>
        <button>delete</button>
    </li>
    */
    li.appendChild(span); 
    li.appendChild(button); 

    span.innerText = newToDo;
    button.innerText = "❌"

    toDoList.appendChild(li);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 

    // 그리는 함수
    paintToDo(newToDo);
    toDos.push(newToDo); 

    // 투두리스트 저장
    // 로컬스토리지
    
    localStorage.setItem("todos", toDos)

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
console.log(savedToDos);
