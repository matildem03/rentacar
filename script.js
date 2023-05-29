function hideAllPaymentForms() {
  const paypalForm = document.getElementById("paypalForm");
  paypalForm.classList.add("hidden");

  const mbwayForm = document.getElementById("mbwayForm");
  mbwayForm.classList.add("hidden");

  const atmForm = document.getElementById("atmForm");
  atmForm.classList.add("hidden");
}

function showPaypal() {
  hideAllPaymentForms();
  const form = document.getElementById("paypalForm");
  if (!form.classList.contains("hidden")) return;
  form.classList.toggle("hidden");
  form.scrollIntoView(true);
}

function showMBWay() {
  hideAllPaymentForms();
  const form = document.getElementById("mbwayForm");
  if (!form.classList.contains("hidden")) return;
  form.classList.toggle("hidden");
  form.scrollIntoView(true);
}

function showATM() {
  hideAllPaymentForms();
  const form = document.getElementById("atmForm");
  if (!form.classList.contains("hidden")) return;
  form.classList.toggle("hidden");
  form.scrollIntoView(true);
}

function goTo() {
  const selectBox = document.getElementById("select");
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;

  if (selectedValue == "lisboa") {
    window.location.href = "booknow1.html";
  } else if (selectedValue == "porto") {
    window.location.href = "booknow.html";
  }
}

function calculateTotal(pricePerDay) {
  const inputElement = document.getElementById("ndays");
  const nDays = inputElement.value;

  const total = pricePerDay * nDays;

  const toPayElement = document.getElementById("toPay");
  toPayElement.innerText = total ? total + "€" : "0€";
}
