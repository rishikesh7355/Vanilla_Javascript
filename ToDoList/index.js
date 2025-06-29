const inputVal = document.getElementById("taskInput");
const addBtn = document.getElementById("btnAdd");

addBtn.addEventListener("click", function () {
    if(inputVal.value===null){
        alert("Please enter task");
    }
    addNewTask(inputVal.value);
    inputVal.value = "";
})

function addNewTask(task) {
    const containerTwo = document.getElementById("newTaskContainer");
    const newDiv = document.createElement("div");
    newDiv.textContent= task;
    containerTwo.appendChild(newDiv);

    if(newDiv.textContent !== "") {
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        delBtn.addEventListener("click", function() {
            containerTwo.removeChild(newDiv);
            containerTwo.removeChild(delBtn);
        })
        containerTwo.appendChild(delBtn);
    }

    }