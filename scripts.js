const card = document.querySelectorAll('.card');


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