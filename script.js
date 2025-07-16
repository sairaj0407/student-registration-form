document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value.trim();

  if (!name || !age || !gender || !course || !email) {
    alert("Please fill all fields!");
    return;
  }

  const tbody = document.querySelector("#studentTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${email}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  tbody.appendChild(row);
  document.getElementById("studentForm").reset();
});

function deleteRow(button) {
  button.parentElement.parentElement.remove();
}
