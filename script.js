let input = document.getElementsByClassName("text")[0]
let button = document.getElementsByClassName("button")[0]
let ul = document.getElementsByClassName("ul")[0];


button.onclick = function(){
    if(input.value == ""){
        alert("لازم تكتب اى حاجة")
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "del"
        li.appendChild(span);

        saveData()
        text()

       
    }
}



ul.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

        saveData()
        text()
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()

        saveData()
        text()
    }
})

function saveData(){
   localStorage.setItem("data" , document.getElementsByClassName("ul")[0].innerHTML) 
}

function show(){
    document.getElementsByClassName("ul")[0].innerHTML = localStorage.getItem("data")
}

show();

function text(){
    localStorage.setItem("text",input.value)
}

function ttext(){
    input.value = localStorage.getItem("text")
}
ttext()
