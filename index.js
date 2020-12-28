const title = document.querySelector("#title");

const BASE_COLOR = "rgb(255, 228, 196)";
const OTHER_COLOR = "rgb(180, 227, 237)";
//console.log("It worked")
function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
    console.log("It's offline!");
}
function handleOnline() {
    console.log("It's online");
}

window.addEventListener("offline", handleOffline );
window.addEventListener("online", handleOnline );