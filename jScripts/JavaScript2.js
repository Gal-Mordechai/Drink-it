var is18 = confirm("האם אתה מעל גיל 18?");
console.log(is18);

if (is18 == false) {
    window.location.href = "https://google.com";
}
else {
    window.href = "homepage.html";
}