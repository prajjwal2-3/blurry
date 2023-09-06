var a = document.querySelector("h2")

var buttn = document.querySelector("button")

var flag=0
buttn.addEventListener('click',function(){
if(flag==0){
    a.innerHTML="friends"
    a.style.color = "green"
    buttn.innerHTML = "remove friend"
    flag=1
}else{
    a.innerHTML = "stranger"
    a.style.color = "red"
    buttn.innerHTML = "add friend"
    flag=0
}
})

