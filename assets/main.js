alert("Connected");

//task added operation
addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new URLSearchParams(new FormData(addTaskForm));
  console.log(formData);

  fetch("http://localhost:5000/task", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  e.target.reset();
  console.log("Something");
};

//task added operation
updateTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new URLSearchParams(new FormData(updateTaskForm));
  console.log(formData.get("task_id"));
  const task_id = formData.get("task_id");

  fetch(`http://localhost:5000/task/${task_id}`, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  e.target.reset();
};

function deleteTask(id) {
  if (confirm('Are you sure to delete the task?')) {
    fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount) {
          location.reload();
        }
      });
  }
}
