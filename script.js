function showElement() {
    var radio = document.getElementById("multibanco");
    var content = document.getElementById("hiddenelement");

    if (radio.checked) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


function hideElement1() {
    var radio = document.getElementById("mbway");
    var content = document.getElementById("hiddenelement");

    if (radio.checked) {
        content.style.display = "none";
    } else {
        content.style.display = "none";
    }
}

function hideButton() {
    var radio = document.getElementById("multibanco");
    var content = document.getElementById("button");

    if (radio.checked) {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}