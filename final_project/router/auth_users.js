const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
        // Filter the users array for any user with the same username
        let userswithsamename = users.filter((user) => {
            return user.username === username;
        });
        // Return true if any user with the same username is found, otherwise false
        if (userswithsamename.length > 0) {
            return true;
        } else {
            return false;
        }
    }

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
    // Filter the users array for any user with the same username and password
    let validusers = users.filter((user) => {
        return (user.username === username && user.password === password);
    });
    // Return true if any valid user is found, otherwise false
    if (validusers.length > 0) {
        return true;
    } else {
        return false;
    }
 
}

//only registered users can login
regd_users.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
   
    // Check if username or password is missing
    if (!username || !password) {
        return res.status(404).json({ message: "Error logging in" });
    }

    if(!isValid(username)){
        return res.status(404).json({ message: "User does not exist!" });
    }

    // Authenticate user
    if (authenticatedUser(username, password)) {
        // Generate JWT access token
        let accessToken = jwt.sign({
            data: password
        }, 'access', { expiresIn: 60 * 60 });

        // Store access token and username in session
        req.session.authorization = {
            accessToken, username
        }
        return res.status(200).send("User successfully logged in");
    } else {
        return res.status(208).json({ message: "Invalid Login. Check username and password" });
    }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  
  const isbn = req.params.isbn;
  let book = books[isbn];
  let reviews = book['reviews']; 
  const review = decodeURIComponent(req.query.review);

  reviews[req.session.authorization.username] = review; 
  res.status(200).json(book);
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
     const isbn = req.params.isbn;
     let book = books[isbn];
     let reviews = book['reviews']; 
     if(reviews[req.session.authorization.username]){
        delete reviews[req.session.authorization.username];
        res.status(200).json(book);
     }else{
        res.send("No reviews to delete...");
     }
});


module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
