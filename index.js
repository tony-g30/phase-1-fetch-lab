function fetchBooks() {
  // Fetch the list of books from the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())  // Convert the response to JSON
    .then(data => renderBooks(data))    // Pass the JSON data to renderBooks
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});