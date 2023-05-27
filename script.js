function showContent() {
    var radio = document.getElementById("paga-mul");
    var content = document.getElementById("content");

    if (radio.checked) {
        content.styles.display = "block";
    } else {
        content.styles.display = "none";
    }
}