alert("Connected");

addTaskForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new URLSearchParams(new FormData(addTaskForm));

  fetch("http://localhost:5000/about", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
