// alert("Connected");

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
    .then((data) => {
      if (data.modifiedCount) {
        alert("Yes updated");
        location.reload();
      }
    });
  e.target.reset();
};

function deleteTask(id) {
  if (confirm("Are you sure to delete the task?")) {
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

function taskStatus(id) {
  if (confirm("Are you sure to complete the task?")) {
    fetch(`http://localhost:5000/task/status/${id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount) {
          location.reload();
        }
      });
  }
}


