const books = JSON.parse(localStorage.getItem("books")) || [];
const error = document.getElementById("error");
const bookTableBody = document.getElementById("bookTableBody");

const handleEdit = (index) => {
  console.log(index);
};
const handleDelete = (index) => {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  PrintTable();
};

// console.log(books);

const PrintTable = () => {
  bookTableBody.innerHTML = "";

  books.map((book, index) => {
    const newRow = document.createElement("tr"); //<tr></tr>

    newRow.innerHTML = `
              <td class="py-2 px-4 border-b">${book.title}</td>
              <td class="py-2 px-4 border-b">${book.author}</td>
              <td class="py-2 px-4 border-b">${book.publisher}</td>
              <td class="py-2 px-4 border-b">${book.publishedDate}</td>
              <td class="py-2 px-4 border-b">${book.price}</td>
              <td class="py-2 px-4 border-b">
                <button onClick="handleEdit(${index})">edit</button>
              </td>
              <td class="py-2 px-4 border-b">
                <button onClick="handleDelete(${index})">delete</button>
              </td>`;
    bookTableBody.appendChild(newRow);
  });
};

PrintTable();

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const publisher = document.getElementById("publisher").value;
  const publishedDate = document.getElementById("published_date").value;
  const price = document.getElementById("price").value;

  if (!title || !author || !publisher || !publishedDate || !price) {
    error.innerHTML = "All fields are required.";
  } else {
    error.innerHTML = "";

    const newData = {
      title,
      author,
      publisher,
      publishedDate,
      price,
    };

    books.push(newData);

    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);

    PrintTable();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("published_date").value = "";
    document.getElementById("price").value = "";
  }
});
