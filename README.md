# notable-coding-challenge
-------------------------------
## Installation Steps
First you will want to clone this repo in your terminal

`
git clone https://github.com/edfranco/notable-coding-challenge.git [your-optional-directory-name here]
`

Seondly you will want to change you terminal directory to your new cloned repo directory. Then you will want to 
download the dependencies I used for this project using npm i.

`
npm i
`
You will also want to have two terminals running
The first one will run the mongoose server for database models using the command mongod

`
mongod
`

The second terminal will be running the node server using the command

`
nodemon
`

Afterwards you will want to create some test database models using a tool such as [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) with JSON in the body for POST requests.

Also note, MongoDB automotically creates a unique ID for each new model created
