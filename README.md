# BOOK REVIEWS APP (NODE.JS - EXPRESS)
This is an example project for exercising with node.js and express framework. It involves JSON Web Token (jwt) based authorization. It acts as a REST API with CRUD operations.

## Running the App
First change to the project directory from terminal:

`$ cd expressBookReviews`

make sure to install node packages by running this command:

`$ npm install --save`

Then start the app:

`$ npm start`

## Get all books
Locate to your browser and visit this URL:

[http://localhost:5000/]()

![Books](https://github.com/kemechial/expressBookReviews/blob/main/1-getallbooks.png)

## Get books by isbn

Locate to your browser and visit this URL by adding the desired isbn:

[http://localhost:5000/isbn/{isbn}]()


![ISBN](https://github.com/kemechial/expressBookReviews/blob/main/2-gedetailsISBN.png)

## Get books by title

Locate to your browser and visit this URL by adding the desired title:

[http://localhost:5000/title/{title}]()


![Title](https://github.com/kemechial/expressBookReviews/blob/main/4-getbooksbytitle.png)

## Get books by author

Locate to your browser and visit this URL by adding the desired author:

[http://localhost:5000/author/{author}]()

![Author](https://github.com/kemechial/expressBookReviews/blob/main/3-getbooksbyauthor.png)

## Get Book Reviews

Locate to your browser and visit this URL by adding the isbn of desired book:

[http://localhost:5000/review/{isbn}]()


![Reviews](https://github.com/kemechial/expressBookReviews/blob/main/5-getbookreview.png)

# Authorized Routes

General data can be seen by all the users. Only registered users can alter data. Registration is done by sending a JSON body to **/register** with **POST** method. 

**Only registered users** can add or delete reviews. If a user wants to add a review to a book or delete his review, he first logs in at **/customer/login** by posting his credentials in JSON format.

Reviews are added or updated by sending a **PUT** request to **/customer/auth/{isbn}/review?review={...}** with review as query in URL. a **DELETE** request to **/customer/auth/review/{isbn}** deletes the review of the logged in user.


![Add Review](https://github.com/kemechial/expressBookReviews/blob/main/8-reviewadded.png)

---

![Delete Review](https://github.com/kemechial/expressBookReviews/blob/main/9-deletereview.png)






