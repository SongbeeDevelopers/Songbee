# Songbee

## Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Built With](#built-with)
- [Create Database](#create-database-and-tables)
- [Installation](#installation)
- [Development Setup](#development-setup-instructions)

## Description

Duration: Three week sprint

Songbee is a streamlined and intuitive service that allows users to commission custom songs written by real artists. Songs can be dedicated to anyone, for any occasion, and in a multitude of genres and vocal styles. The songs will be fully customizable by the user with opportunities for edits and expansions throughout the process. 

The initial version of Songbee was only partially functional. As a result, Songbee LLC was using Gmail and Dropbox for client communication instead of fully utilizing the potential of a web app. Recognizing the opportunity to bring this incredible concept to life, our team of developers rebuilt the site from the ground up. We turned the vision into a reality, addressing the functionality issues and breathing new life into this platform.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org)

## Built With
<a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
<a href="https://vitejs.dev/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" height="40px" width="40px" /></a>
<a href="https://www.npmjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.npmjs.com/package/nodemon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg" height="40px" width="40px" /></a>
<a href="https://cloudinary.com/"><img src="https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg" height="40px" width="40px" /> </a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://mailchimp.com/developer/"><img src="https://cdn2.iconfinder.com/data/icons/picons-social/57/78-mailchimp-2-1024.png" height="40px" width="40px" /></a>
<a href="https://docs.stripe.com/development"><img src="https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>

## Getting Started

### Create Database and Tables
Create a new database called `songbee` and run the whole `database.sql` file as a query.
This will create all the necessary tables, and the INSERT statements will provide some dummy data for testing.

If you would like to name your database something else, you will need to change `songbee` to the name of your new database name in `server/modules/pool.js`.

### Installation
1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type... git clone {paste SSH link}
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run npm install to install all dependencies
7. Create a .env file at the root of the project and provide the following API keys:
   MAILCHIMP_API_KEY, STRIPE_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
9. Run npm run server in your VS Code terminal
10. Open a second terminal and run npm run client

### Development Setup Instructions

- Run `npm install`.
    - Be sure to take stock of `package.json` to see which dependencies you'll need to add.
- Create a `.env` file at the root of the project and paste this line into the file:

```plaintext
SERVER_SESSION_SECRET=superDuperSecret
```

While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [Password Generator Plus](https://passwordsgenerator.net). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

- Start postgres if not running already by using opening up the [Postgres.app](https://postgresapp.com), or if using [Homebrew](https://brew.sh) you can use the command `brew services start postgresql`.
- Run `npm run server` to start the server.
- Run `npm run client` to start the client.
- Navigate to `localhost:5173`.


## Usage
Welcome to Songbee!!
With this app a user can create custom made songs for special occasions following the step by step process. 
Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:5173/#/. 

<img width="1283" alt="Screenshot 2024-02-15 at 10 56 30 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/2fa4f0ea-620c-4ff5-80b2-a90964a29422" height="450px" width="350px">


### Login/Registration
A user can register and have the option of recieving a marketing emails via Mailchimp, but must agree to the website's privacy policy and terms of service. Once they are registered they can begin using Songbee to start the process of creating a song request that fits their specifications.
Here are screenshots of the registration and login pages

<img width="1112" alt="Screenshot 2024-02-15 at 3 43 29 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/c151af96-6f2c-4125-81ae-0c96c2d65951" height="450px" width="350px">
<img width="1112" alt="Screenshot 2024-02-15 at 6 43 35 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/b8e6760d-55f7-4791-a4e6-4980c58f9d19" height="450px" width="350px">

### Song Order Process
After clicking start your song button, you are brought to this page where the process starts by letting you choose the delivery, streaming and verse options that best suits the user preferences before checking out.
After the user has selected the options that they prefer, they can click on the checkout button and be directed to a payment provider (stripe) and enter their credit card information. then after payment is complete, the user can create their customized their song for what type of occasion, genre, tempo and vocal type and sharing their own personal story about the song by filling out the form.

<img width="997" alt="Screenshot 2024-02-15 at 7 12 46 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/0e9fcbe4-1e2e-4b89-ba62-0d1a0cbe9026"  height="450px" width="350px">
<img width="1162" alt="Screenshot 2024-02-15 at 11 44 49 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/0e81a750-cb9a-4401-b12a-771762219f80" height="450px" width="350px">



### User Functionality
On this page the user can view their order history to see their completed and pending songs. Also they can click the details tab to view the song details and can play the audio file to hear thier requested song.

<img width="1283" alt="Screenshot 2024-02-15 at 10 58 15 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/a68cfe58-6c8f-419d-b172-2429a6b1fd8c" height="450px" width="350px">

<img width="1267" alt="Screenshot 2024-02-15 at 11 05 56 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/c0d4ed00-2715-4c31-82f4-384d976e0aee" height="450px" width="350px">

<img width="1096" alt="Screenshot 2024-02-16 at 12 05 46 AM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/36f24116-1194-4279-87ef-d96b8cec4e65" height="450px" width="350px">



### Admin Functionality
On the admin page the owners can view the completed and pending requests as well as what users are requesting songs, also there is a tab for pending artist to see what artists that are wanting to sign up to Songbee and will have the ability to approve or deny an artist. On the pending requset page Hannah or Linton will be able to view the deatials of the requested songs and be able to make any adjutments if needed and mark them complete once the song is finished. The admin can also filter through songs and artist in the text field.

<img width="1271" alt="Screenshot 2024-02-15 at 11 09 55 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/b2ec4e4b-7b38-448b-b1f1-1885609e8a73" height="450px" width="350px">

On the completed request page, they can view the deatils of completed songs and mark as complete.

<img width="1360" alt="Screenshot 2024-02-15 at 11 57 57 PM" src="https://github.com/SongbeeDevelopers/Songbee/assets/122954115/f9524c16-74d9-4494-b6aa-6eec693d2231" height="450px" width="350px">




## Dev Notes
If you wish to see more from the developers of this project, please view our respective github portfolios:
- Abubakar Aden: https://github.com/Abuaden
- Aliona CJ: https://github.com/alionacj
- Brian Werner: https://github.com/BrianWerner-43
- Walker Neudorff: https://github.com/walkerneu

## Acknowledgements
Thank you to Prime Digital Academy for facilitating this expansive learning journey, culminating in this project.
Thank you Songbee LLC - Hannah Rutti and Linton Robinson, for their cooperation with Prime and being a pleasure to work with throughout this process.
