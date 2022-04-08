//card clicks handlers
const card = document.querySelectorAll('.card, .pub');

card.forEach((ele) => {
    ele.mainLink = ele.querySelector('.main-link');
    ele.addEventListener("click", handleClick)
});

function handleClick(event) {
    const noTextSelected = !window.getSelection().toString();
    if (noTextSelected) {
        event.currentTarget.mainLink.click();
    }
}

//light-dark mode handlers
var icon = document.getElementById("toggle-theme");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
    icon.src = "Assets/moon.png";
    document.body.classList.add("light-mode");
} else if (localData == "dark") {
    icon.src = "Assets/sun.png";
    document.body.classList.remove("light-mode");
}

icon.onclick = function() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.src = "Assets/moon.png";
        localStorage.setItem("theme", "light");
    } else {
        icon.src = "Assets/sun.png";
        localStorage.setItem("theme", "dark");
    }
}