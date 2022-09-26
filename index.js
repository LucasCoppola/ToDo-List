const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");
const inputEl = document.querySelector("#input-el");
const listItem = document.querySelector("#list-items");

submitBtn.addEventListener("click", function(){
    let task = document.createElement("div");
    task.classList.add("task")
    
    let li = document.createElement("li")
    li.innerHTML = `${inputEl.value}`
    task.appendChild(li)
    
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `<span>&times;</span>`
    deleteBtn.classList.add("delete-btn")
    task.appendChild(deleteBtn)
    
    if(inputEl.value === ""){
        alert("Please enter a task")
    }else {
        listItem.appendChild(task)
    }

    inputEl.value = "";
    
    deleteBtn.addEventListener("click", function(){
        
        deleteBtn.parentElement.remove()
    })
})

clearBtn.addEventListener("click", function() {
    listItem.innerHTML = "";
})