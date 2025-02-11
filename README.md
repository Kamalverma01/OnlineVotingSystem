Voting Application Backend
This is the backend of a Voting System that allows users to vote for candidates securely. The application offers features for user authentication, candidate management, and voting functionalities. Built using Node.js, Express.js, and MongoDB, it provides a robust and secure environment for managing users and votes.

Features
User Authentication:

Users can sign up and log in using their Aadhar Card Number and password.
Candidate Management:

Users can view the list of candidates.
Admins can manage candidates (add, update, delete), but they cannot vote.
Voting System:

Users can vote for a candidate, but each user can only vote once.
Admin Role:

Admins can add, update, and delete candidates but cannot vote.
Technologies Used
Node.js: Backend runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database for storing user and candidate data
JSON Web Tokens (JWT): For secure authentication and authorization
bcrypt: Password hashing for security
Installation
To get the Voting Application backend up and running locally:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/Kamalverma01/OnlineVotingSystem.git
Navigate into the project directory:

bash
Copy
Edit
cd voting_app
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file for environment variables and add the following:

env
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the application:

bash
Copy
Edit
npm start
API Endpoints
Authentication
Sign Up
POST /signup
Sign up a new user using Aadhar Card Number and password.

Login
POST /login
Log in a user with Aadhar Card Number and password.

Candidates
Get Candidates
GET /candidates
Get a list of all candidates.

Add Candidate
POST /candidates
Add a new candidate (Admin only).

Update Candidate
PUT /candidates/:id
Update a candidate's information by ID (Admin only).

Delete Candidate
DELETE /candidates/:id
Delete a candidate by ID (Admin only).

Voting
Get Vote Count
GET /candidates/vote/count
Get the count of votes for each candidate.

Vote for Candidate
POST /candidates/vote/:id
Vote for a candidate (User only).

User Profile
Get Profile
GET /users/profile
Get user profile information.

Change Password
PUT /users/profile/password
Change the user’s password.

Security
Passwords are securely hashed using bcrypt.
JWT-based authentication ensures secure communication and authorization for users and admins.
