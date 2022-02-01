function logOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Log Out"
    } else {
        element.innerText = "Login"
    }
};

function removeButton(element) {
    element.remove()
};

function likeAlert() {
    alert("Ninja was liked");
};