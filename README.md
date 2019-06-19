INSTALLATION
The project is done using Node.js framework Express.js
  1)Install Node.js	
  2)Install Express.js in the root directory of the project using npm(node package manager)
    npm install express 
  3)Install npm router using 
    npm install router
  4)Install body-parser using
    npm install body-parser
  5)Install jsonwebtoken module using
    npm install jsonwebtoken
  6)Install uuid module using
    npm install uuid
----------------------------------------------------------------------------
 There are two services:
 1) GET API call to generate JWT key,given the username and password of user in the body of request. To generate JWT key jsonwebtoken module is used (implementation details are in controller directory)
 2) GET API call to generate user ID ,given username,password,dateofbirth,name of user body of request.To generate user ID uuid module has been used(implementation details are in controller directory)

 --------------------------------------------------------------------------- 
 
# DataSutram_challenge
