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
A user can register and heve the option of recieving a marketing emails via Mailchimp. Once they are registered they can begin using Songbee to start the process of creating a song request that fits their specifications.

### Login/Registration
Here are screenshots of the registration and login pages
![Alt text](file:///Users/brianwerner/Desktop/Screenshot%202024-02-15%20at%203.43.29%E2%80%AFPM.png)

### Song Order Process

### User Functionality

### Admin Functionality


## Dev Notes
If you wish to see more from the developers of this project, please view our respective github portfolios:
- Abubakar Aden: https://github.com/Abuaden
- Aliona CJ: https://github.com/alionacj
- Brian Werner: https://github.com/BrianWerner-43
- Walker Neudorff: https://github.com/walkerneu

## Acknowledgements
Thank you to Prime Digital Academy for facilitating this expansive learning journey, culminating in this project.
Thank you Songbee LLC - Hannah Rutti and Linton Robinson, for their cooperation with Prime and being a pleasure to work with throughout this process.
