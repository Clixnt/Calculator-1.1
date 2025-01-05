const Macbutton1 = document.getElementById("Macbutton1");
const behind = document.getElementById("behind");
const Main = document.getElementById("closeMain");

Macbutton1.addEventListener("click", event => {
    Main.style.display = "none";
});

behind.addEventListener("click", event => {
    Main.style.display = "block";
});
