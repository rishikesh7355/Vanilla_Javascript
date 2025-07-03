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
    newDiv.classList.add("newTaskStyle");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    newDiv.appendChild(taskSpan);

    if(newDiv.textContent !== "" && newDiv.textContent === newDiv.textContent.trim()) {
        const delBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delBtn");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");

        // edit logic
        editBtn.addEventListener("click", () => {
            if(editBtn.textContent === "Edit") {
               const input  = document.createElement("input");
               input.type = "text";
               input.value = taskSpan.textContent;
               newDiv.replaceChild(input, taskSpan)
               editBtn.textContent = "Save";
            }else {
                const input = newDiv.querySelector("input");
                const editedValue = input.value.trim();
                if(!editedValue) return;
                taskSpan.textContent = editedValue;
                newDiv.replaceChild(taskSpan, input);
                editBtn.textContent = "Edit";
            }
        });

        // delete logic 
        delBtn.addEventListener("click", function() {
            containerTwo.removeChild(newDiv);
        })
        newDiv.appendChild(delBtn);
        newDiv.appendChild(editBtn);

        containerTwo.appendChild(newDiv);
    }

    }