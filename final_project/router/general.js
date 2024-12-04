const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
   res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
     // Extract the lastName parameter from the request URL
    const isbn = req.params.isbn;
    // Filter the users array to find users whose lastName matches the extracted lastName parameter
    let filtered_book = books[isbn];
    // Send the filtered_lastname array as the response to the client
    res.send(filtered_book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  // Extract the lastName parameter from the request URL
    const author = req.params.author;  
    matched_books = [];
      Object.values(books).forEach(book =>{
        if (book.author == author){
             matched_books.push(book);
        }
      });
      if(matched_books.length > 0){
        res.status(200).send(
            JSON.stringify(matched_books, null, 4)
        );
      } else {
        res.send("The author was not found!");  
      }
      
    });
// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title; 
    matched_books = [];
      Object.values(books).forEach(book =>{
        if (book.title == title){
             matched_books.push(book);
        }
      });
      if(matched_books.length > 0){
        res.status(200).send(
            JSON.stringify(matched_books, null, 4)
        );
      } else {
        res.send("The title was not found!");  
      }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
       // Extract the lastName parameter from the request URL
       const isbn = req.params.isbn;
       if(!Object.keys(books).includes(isbn)){
          return res.status(404).send("isbn not found!");
       }
       // Filter the users array to find users whose lastName matches the extracted lastName parameter
       let filtered_book = books[isbn];
       res.send(filtered_book['reviews']);
});

module.exports.general = public_users;
