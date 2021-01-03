const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    // 페이지 갱신을 막기 위해, cancelable 한 경우에만 사용 가능
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    // 기존 submit event는 input이 보내진 후 비워지지만, preventDefault()이가 때문에 직접 비워줘야함
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}


init();