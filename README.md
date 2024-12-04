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

Locate to your browser and visit this URL by adding the desired title:

[http://localhost:5000/author/{author}]()

![Title](https://github.com/kemechial/expressBookReviews/blob/main/3-getbooksbyauthor.png))

# Authorized Routes

General data can be seen by all the users. Only registered users can alter data. Registration is done by sending a JSON body to **/register** with **POST** method. 

If a user wants to add a review to a book or delete his review, he first logs in at **/custom/login** by posting his credentials in JSON format.




