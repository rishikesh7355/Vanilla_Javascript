const inputVal = document.getElementById("taskInput");
const addBtn = document.getElementById("btnAdd");

addBtn.addEventListener("click", function () {
    if(inputVal.value===inputVal.value.trim()) {
        addNewTask(inputVal.value);
    }
    inputVal.value = "";
})

function addNewTask(task) {
    const containerTwo = document.getElementById("newTaskContainer");
    const newDiv = document.createElement("div");
    newDiv.textContent= task;
    containerTwo.appendChild(newDiv);

    if(newDiv.textContent !== "" && newDiv.textContent === newDiv.textContent.trim()) {
        const delBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");
        // editBtn.addEventListener("click", () => {
        //     if(newTask !== null && newTask!== newTask.trim()){
        //         newDiv.textContent = newTask;
        //     }
        // });
        delBtn.addEventListener("click", function() {
            containerTwo.removeChild(newDiv);
            containerTwo.removeChild(delBtn);
            containerTwo.removeChild(editBtn);
        })
        newDiv.appendChild(delBtn);
        newDiv.appendChild(editBtn);

        containerTwo.appendChild(newDiv);
    }

    }