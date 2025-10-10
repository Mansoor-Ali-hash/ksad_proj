const books = [
    { title: "Computer Science - Part 1", file: "assets/books/computer1.pdf" },
    { title: "Mathematics - Class 10", file: "assets/books/math10.pdf" },
    { title: "English Grammar Guide", file: "assets/books/english_grammar.pdf" },
    { title: "Physics Notes - XII", file: "assets/books/physics12.pdf" },
    { title: "Islamiat Short Questions", file: "assets/books/islamiat.pdf" },
  ];
  
  const booksList = document.getElementById("booksList");
  const searchInput = document.getElementById("searchInput");
  
  function showBooks(filter = "") {
    booksList.innerHTML = "";
  
    books
      .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
      .forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
          <h3>${book.title}</h3>
          <a href="${book.file}" target="_blank" download>📥 Download</a>
        `;
        booksList.appendChild(card);
      });
  }
  
  searchInput.addEventListener("input", () => {
    showBooks(searchInput.value);
  });
  
  // Initial Load
  showBooks();
  