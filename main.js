// //Book Class: Represents a Book
// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }
// //UI Class: Handle UI Tasks
// class UI {
//     static displayBooks() {
//         const StoredBooks = [
//             {
//                 title: 'Book One',
//                 author: 'John Doe',
//                 isbn: '3434434'
//             },
//             {
//                 title: 'Book Two',
//                 author: 'Jane Doe',
//                 isbn: '45545'
//             }
            
//         ];
        
//         const books = StoredBooks;
        
//         books.forEach((book) => UI.addBookTolist(book));
//     }
    
//     static addBookToList(book) {
//         const list = document.querySelector('#book-list');
        
//         const row = document.createElement('tr');
        
//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class="btn btn-danger btn-sm 
//         delete">X</a></td>
//         `;
        
//         list.appendChild(row);
//     }
// }
// // Store Class: Handles Storage

// //Event: Display Books

// document.addEventListener('DOMContentLoaded', UI.displayBooks);

// // Event: Add a Book

// // document.querySelector('#book-form').addEventListener('submit', (e)=> {
//     //form values
//     // const title = document.querySelector('#title').value;
//     // const author = document.querySelector('#author').value;
//     // const isbn = document.querySelector('#isbn').value;

//     //instantiate

// //     const book = new Book(title, author, isbn);

// //     console.log(book)
// // });

// // Event: Remove a Book

// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        // Replace StoredBooks with an empty array to be filled later with real book data
        const StoredBooks = [];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage (You can implement this if you want to store data locally or on a server)

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    // hello

    // Validate input fields (add your own validation logic)

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
    } else {
        // Create a new Book instance
        const book = new Book(title, author, isbn);

        // Add the book to the UI
        UI.addBookToList(book);

        // Clear the form fields
        title.value = "";
        author.value = "";
        isbn.value = "";
        UI.clearFields();
    }
});

// Event: Remove a Book (You can implement this event handler as well if needed)
