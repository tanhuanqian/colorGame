function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `RGB(${r}, ${g}, ${b})`;
}
  
function generateColors(){
    const colors = new Set();
    while (colors.size < 3){
        colors.add(getRandomColor());
    }
    return Array.from(colors);
}
  // 应用随机颜色到按钮
function applyRandomColors() {
    const buttons = document.querySelectorAll(".round");
    const uniqueColors = generateColors();

    buttons.forEach((button, index) => {
        const color = uniqueColors[index];
        button.style.backgroundColor = color;
    });

    const randomColor = uniqueColors[Math.floor(Math.random()*uniqueColors.length)]
    document.getElementById("rgb").textContent = `${randomColor}`;

    buttons.forEach((button) =>{
        button.onclick = function(){
            if(button.style.backgroundColor.toUpperCase() == randomColor){
                alert("Correct");
                resetGame();
            } else{
                button.classList.add("hidden");
            }
        }
    });
}

function resetGame(){
    const buttons = document.querySelectorAll(".round");
    buttons.forEach((button) => {
        button.classList.remove("hidden");
    });
    applyRandomColors();
}

function refreshGame(){
    applyRandomColors();
}

document.addEventListener("DOMContentLoaded", () => {
    applyRandomColors();

    const refreshButton = document.getElementById("refresh");
    refreshButton.onclick = refreshGame;
});