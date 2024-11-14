const toggleButton1 = document.getElementById("toggle-button") as HTMLButtonElement
const interest1 = document.getElementById("interest-btn") as HTMLElement

toggleButton1.addEventListener("click", ()=> {
    if(interest1.style.display === "none") {
        interest1.style.display = "block"
    } else {
        interest1.style.display = "none"
    }
});

