var toggleButton = document.getElementById("toggle-button");
var interest = document.getElementById("interest-btn");
toggleButton.addEventListener("click", function () {
    if (interest.style.display === "none") {
        interest.style.display = "block";
    }
    else {
        interest.style.display = "none";
    }
});
