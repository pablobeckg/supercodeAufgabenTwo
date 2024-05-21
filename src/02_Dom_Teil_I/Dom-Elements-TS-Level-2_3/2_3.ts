const changeButton = document.getElementById("changeButton");
if (changeButton) {
    changeButton.addEventListener("click", changeColors);
}

function changeColors() {
    const body = document.getElementsByTagName("body")[0];
    const colors = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362", "#666", "#333"];
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
