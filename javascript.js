document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let submit = document.getElementById("submit")
submit.addEventListener("click", function (e) {
    alert("Form submitted!");
    e.preventDefault();
    let form = document.getElementById("form");
    form.reset();
})