

// `` This is a called template literal
// It allows for multi-line strings and string interpolation

var arr = [{ dp: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8WXlQTFUtWWFrTTR8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1525299374597-911581e1bdef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8WXlQTFUtWWFrTTR8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1515951745245-bf86d50b2e80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8WXlQTFUtWWFrTTR8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/flagged/photo-1561338484-01bbb4026c7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8WXlQTFUtWWFrTTR8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1739730804237-fbd2ad762fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNnx8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1671741917046-2e5df06e9492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwN3x8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1550639524-39ef65e52515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1739730735278-5df84fa76271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0MXx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxMXx8fGVufDB8fHx8fA%3D%3D" },
{ dp: "https://images.unsplash.com/photo-1702579450282-e631b57efadd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxZeVBMVS1ZYWtNNHx8ZW58MHx8fHx8", story: "https://plus.unsplash.com/premium_photo-1688522732585-9c1021a0a021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8" }
]
var clutter = ""
var stories = document.querySelector(".stories")
arr.forEach(function (elem,index) {
    clutter +=`<div class="story">
               <img id ="${index}"src="${elem.dp}" alt="">
            </div>`
})
document.querySelector(".stories").innerHTML = clutter

stories.addEventListener("click",function(details){
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[details.target.id].story})`

    setTimeout(function(){
         document.querySelector("#fullScreen").style.display = "none"
    },3000)
})
