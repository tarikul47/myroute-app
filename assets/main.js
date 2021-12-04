alert("Connected");

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
