`Required - Node js, npm, nodemon, MongoDB`

### To Build and Run:

Frontend App
`npm init`
`npm start`


Backend Server:
`nodemon server.js`
(Can validate Api calls with Postman)

### Technologies and Packages used:

Node js | Nodemon |  React JS |  React-Dom | React-ga |  React-scripts | Express JS | MongoDB | Mongoose| CORS | jQuery |Ajax


----------------------------------
Folder Structure
----------------------------------

--- Package.json      (Contains all necessary build info)
--- Read Me           (Describes the solution)
--- src               (Contains code for Front end)
     |
     ----- index.js    (Start point loads App)
     ----- App.js      (React App)
     ----- Components  (Contains all the views)
            |
            ----- Project.js   (Loads data from user.json)
            ----- ProcessLog.js (Loads data from logs.json)
      |
      |
      public
          |
           ----- css
           ----- images
           ----- js
           ----- index.html
           ----- logs.json
           ----  users.json
      |
      |
      backend
        |
          ---- server.js (Node-Express Server)
          ---- log.module.js (Mongoose Schema for logs.json)

---------------------------------------------------
Approach:
---------------------------------------------------
For the given challenge I have used:
1. React JS: For UI / front end

2. React code used User.json value in props to read and
display user info i.e.name, avtar, id and occupation.

3. I was initially using logs.json data in React props;
however for every user_id to run a linear scan to calculate
revenue for either type; meant heavy compute on client side;
and  risk of data security over network.

4. Thus I loaded the logs.json data into MongoDB
(as both json and MongoDB are compatible being key-value)

5. A server in Nodejs connects with Mongo Server.

6. I have used ExpressJS  to make REST API calls over HTTP.

7. Mongoose for quering into MongoDB and returning response.

8. As of now User data is displayed on the frontend; Server is able to make api calls to fetch
a) data with specified user_id.
b) Sum of revenue for a user, type being impression.
c) Sum of revenue for a user, type being conversion.

-----------------------------------------------------------
What I would have done further :

1. Used Bootstrap for React.
Currently every Project Component is returning data in div.

2. For every user_id in map() function returning user info;
I would have returned fancy React card
(https://react-bootstrap.github.io/components/cards/#title-text-and-links)

3. Would have called the Service api to calculate
respective revenues. Add the values into the card component.

4. I could not come up of anything with graphs. To compute and display.



--------------------------------------------------
# TUNE Front End Coding Challenge

## The Setup

Two sets of data are attached that represent 30 days of impressions, conversions, and revenue, as well as the user accounts associated with the activity.

`users.json`

An array of user objects. Each user has an id, name, avatar, and occupation.

`logs.json`

Event information about the traffic. Each item has a type (either 'impression' or 'conversion'), date and time of the event, user ID of the account the event is related to, and any revenue associated.

## The Task

Write a client-side application that implements the attached mockup in the framework of your choice, using any libraries that are appropriate. The provided mockup is just a guide. Feel free to improve the design within the requirements:

* Each card should have the user's avatar, name, and occupation. For users with no image avatar, display the first letter of their first name in place of an image.

* Each card should display the sum of all impressions, conversions, and revenue.

* Each card should display a simple chart of of conversions per day.

## Bonus Items

* Implement the ability for the user to sort the cards by name and by total impressions, conversions, or revenue
* Write unit tests for testable portions of your code
