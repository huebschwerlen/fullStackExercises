### Assignment 3 - Node, Express, and Frameworks

HOW TO RUN ASSIGNMENT 3 Exercises and Tutorials:

First make sure you have node installed: https://nodejs.org/en/download/

Clone or Download HW3 Folder from private-repo-hw

Enter your terminal and navigate to HW3 folder

Run NPM install in terminal once you're in HW3 root

01- Node routes exercise
1) in the terminal while you're still in HW3 root enter: node 01-node-routes.js to run exercise 1
2) you should receive a message saying : Server running at http://localhost:5000 ... copy the URL it provides you and enter it in your browser
3) you should be greeted with a Welcome message
4) add /redirect to the url to be redirected to url/redirected with a little redirect message 
5) replace /redirect path in URL with /cache and you should see a message reading "this resource was cached" - if you inspect page, go to network tab and click on cache you should see the cache-control: max-age=86400
6)replace /cache path with /cookie and you should see a message saying "cookies... yummm" and set 'hello=world' as a cookie
7) if you go to URL /check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie
8) if you try any other url path it should give 404 error
9) press control c in terminal to stop running this exercise


02- Node URL parsing exercise
1) in the terminal while you're still in HW3 root enter: node 02-node-url.js  to run exercise 2
2) you should receive a message saying : Server running at http://localhost:5000 ... copy the URL it provides you and enter it in your browser
3) you should see two tables that read hello world lorem ipsum ..... and the other should read: first 1 second 2 third 3


03- Express form submission exercise
1) in the terminal while you're still in HW3 root enter: node 03-form.js to run exercise 3
2) you should receive a message saying : Server running at http://localhost:5000 ... copy the URL it provides you and enter it in your browser
3) fill out the form and submit - you should be taken to a page where all info you submitted will be displayed

04- Espress sessions exercise
1) in the terminal while you're still in HW3 root enter: node 04-sessions.js to run exercise 4
2) you should receive a message saying : Server running at http://localhost:5000 ... copy the URL it provides you and enter it in your browser
3) now whatever path you enter in the url it should display as current - and when you move to the next path it should show the previous ones


05- Templating engine exercise
1) in the terminal while you're still in HW3 root enter: node 05-templates.js to run exercise 5
2) you should receive a message saying : Server running at http://localhost:5000 ... copy the URL it provides you and enter it in your browser along with one of these three paths:

/main : return the list of all the countries in the world and their capitals.

/populous : return the list of countries with a population of least 20 million, starting with the most populous.

/regions :  with the number of countries in each region of the world, according to the API data.


06-Express-Tutorial
1) go to https://ancient-eyrie-20150.herokuapp.com/catalog   to see completed, deployed app tutorial 
    * for some reason I had to create a different repo in my main github to deploy this site : to see that repo with the deployed version visit:                           https://github.com/huebschwerlen/express-locallibrary-tutorial
    
2) and/or, in your terminal, navigate into directory 06-express in hw3 root folder then go into directory: express-locallibrary-tutorial-main (this should be identical(or near) to the other repo above). 
3) run: npm install   in the terminal
4) enter: npm run start    into your terminal
5) you should be able to now navigate to http://localhost:3000/catalog and navigate through the site 
.....here are some routes to try:   https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes

07-React-Tutorial
1) in the terminal navigate to 07-react folder in HW3 folder - then navigate into my-app folder
2) enter: npm start in terminal and it should take you to a tic tac toe game at http://localhost:3000/
