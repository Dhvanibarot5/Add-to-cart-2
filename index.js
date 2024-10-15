const employees = JSON.parse(localStorage.getItem("employees")) || [];
const error = document.getElementById("error");
const employeeTableBody = document.getElementById("employeeTableBody");

const handleDelete = (index) => {
  employees.splice(index, 1);
  localStorage.setItem("employees", JSON.stringify(employees));
  PrintTable();
};

const PrintTable = () => {
  employeeTableBody.innerHTML = "";

  employees.map((employee, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td class="py-2 px-4 border-b">${employee.name}</td>
                <td class="py-2 px-4 border-b">${employee.email}</td>
                <td class="py-2 px-4 border-b">${employee.phone}</td>
                <td class="py-2 px-4 border-b">${employee.position}</td>
                <td class="py-2 px-4 border-b">
                <button onClick="handleEdit(${index})">edit</button>
                </td>
                <td class="py-2 px-4 border-b">
                <button onClick="handleDelete(${index})">delete</button>
                </td>
                    `;
    employeeTableBody.appendChild(newRow);
  });
};

PrintTable();

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const position = document.getElementById("position").value;

  if (!name || !email || !phone || !position) {
    error.innerHTML = "All fields are required.";
  } else {
    error.innerHTML = "";

    const newData = {
      name,
      email,
      phone,
      position,
    };

    employees.push(newData);

    localStorage.setItem("employees", JSON.stringify(employees));
    console.log(employees);

    PrintTable();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("position").value = "";
  }
});
