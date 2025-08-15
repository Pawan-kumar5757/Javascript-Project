
var change = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0
btn.addEventListener("click", function () {
    if (check == 0) {
        change.innerHTML = "Friend"
        change.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    } else {
        change.innerHTML = "UnFriend"
        change.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }

})