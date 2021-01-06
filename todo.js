const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

let idNum = 1;

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    while(toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    idNum = 1;
    cleanToDos.forEach(function(toDo){
        toDo.id = idNum;
        paintToDo(toDo.text); // 내부 id도 idNum으로 지정됨.
        // paintToDo가 실행된 후 idNum += 1;이 실행되기 때문에 추가로 실행하지 않음.
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text
    const newId = idNum;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    idNum += 1;
    saveToDos();
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
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}


init();