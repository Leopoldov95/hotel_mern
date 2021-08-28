# Suay Resort 🏝

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e5e3ce1-1a33-41c4-a6d3-21be63729647/deploy-status)](https://app.netlify.com/sites/suay-resort/deploys)
## Table of Contents
* [General Info](#general-info)
* [Usage](#usage)
* [Features](#features)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Challenges](#challenges)
* [What I Learned](#what-i-learned)


## General Info
This is a Proof of Concept (POC) fullstack hotel website created using the MERN stack and implementing Redux. This website contains multiple pages that showcase the hotel's amenties and offerings and allows users to browse multiple rooms and book them. All bookings are stored and managed in the backend and user's are only able to book rooms that are currently available based on their selected dates as well as number of guests.

## Screenshot
![ScreenShot](https://github.com/Leopoldov95/bicycle_ecomm/blob/main/screenshot.png?raw=true)

## Usage
Simply click on the demo link provided.
If you wish to download the code and use it, you must first download or clone the repo.
If you want to use your own MongoDb Atlas server, you must configure the .env file with your MongoDB database and then run ```npm install ``` to install the dependencies and then start the server with ```npm start ```

If you just want to use the client then simply go to the client folder, run ```npm install ``` to install the dependencies and then start the client with ```npm start ```

## Features
* Fullstack MERN Hotel Website that utilizes CRUD functionality 
* Users can browse rooms and create bookings on selected dates
* Users enter their details in a checkout form to create a booking and store their information
* Backend handles date collision's and notifies user's if a room is available or unavailable on the selected dates
* User can view and delete their bookings by entering the provivded confirmation code or email
* Room and booking data is stored within a MongoDB databse
* Website is fully responsive and looks great across multiple platforms


## Technologies
The app was created with the following technologies
* MongoDB
* Express.JS
* ReactJS
* Redux
* NodeJS

## Challenges 
This is my second fullstack project I have created using the MERN stack.
This time I decided to add more backend knowlegde to handle creating, reading, and deleting booking information as well as notify the client if a room has been booked on their selected dates and is therefore no available to book.
I also wanted to use Redux to handle state change. As this was my first time implementing Redux it was quite the learning curve but in the end I was satisified with the resulsts.

## What I Learned
This has been my largest project created so far. This is actually my second attempt at creating a full stacked ECommerce website, but my first iteration did not utilize a database and therefore the end result had many many issues. This project was the most I have ever delved with the backend side of web programming and it certainly has been a challenge. I learned how to use MongoDB Atlas as a database to store information and how to retrieve that information onto the front-end. I learned better folder structure and how to many if a logged in user vs a guest has certain privileges to access certain features. 

