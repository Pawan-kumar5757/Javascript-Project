const desgn = document.querySelector("#throttle")
const throttle = (fn, delay) => {
  let lastCalled = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - lastCalled > delay) {
      lastCalled = now;
      return fn(...args);
    }
  }
}
document.querySelector(".center")
  .addEventListener("mousemove", throttle((dets) => {
    var div = (document.createElement("div"))
    div.classList.add("imagediv")
    div.style.left = dets.clientX + "px"
    div.style.top = dets.clientY + "px"
    var imge = document.createElement("img")
    imge.setAttribute("src","https://images.unsplash.com/photo-1750173588233-8cd7ba259c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D")
    div.appendChild(imge)

    document.body.appendChild(div)

    gsap.to(imge,{
      y:"0",
      ease: Power1,
      duration: 0.6,

    })
    gsap.to(imge,{
      X:"100%",
      ease: Power1,
      duration: 0.6,
      
    })

    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400))

