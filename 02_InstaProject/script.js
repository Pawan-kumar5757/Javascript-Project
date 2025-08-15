var cont = document.querySelector("#container")
var dell = document.querySelector("i")


cont.addEventListener("dblclick", function () {
    dell.style.transform = 'translate(-50%,-50%) scale(1)';
    dell.style.opacity = 1;

setTimeout(function () {
    dell.style.opacity = 0;
}, 1000);

setTimeout(function () {
    dell.style.transform = 'translate(-50%,-50%) scale(0)'
}, 2000);
})