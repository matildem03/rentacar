function showElement() {
    var radio = document.getElementById("multibanco");
    var content = document.getElementById("hiddenelement");

    if (radio.checked) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function hideElement() {
    var radio = document.getElementById("paypal");
    var content = document.getElementById("hiddenelement");

    if (radio.checked) {
        content.style.display = "none";
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

function hideElement() {
    var radio = document.getElementById("multibanco");
    var content = document.getElementById("buttonesconde");

    if (radio.checked) {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}