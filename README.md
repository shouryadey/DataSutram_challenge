### 1)  The project is done using Node.js framework Express.js
----------------------------------------------------------------------------
### 2)  Installation:
####  i)   Install Node.js	

####  ii)   Install Express.js in the root directory of the project using npm(node package manager)
        npm install express 

####  iii)   Install npm router using 
        npm install router

####  iv)   Install body-parser using
       npm install body-parser

####  v)   Install jsonwebtoken module using
       npm install jsonwebtoken

####  vi)   Install uuid module using
       npm install uuid
#### vii)   Install nodemon using
       npm install nodemon
    
----------------------------------------------------------------------------
 ### 3)  Services:
 There are two services:
1) GET API call to generate JWT key,given the _username_ and  _password_ of user in the body of request. To generate _**JWT key**_  , jsonwebtoken module is used (implementation details are in controller directory)

2) GET API call to generate user ID, given _username_ , _password_ , _dateofbirth_ , _name_  of user in the body of the  request.To generate _**user_ID**_  , uuid module has been used(implementation details are in controller directory)

 --------------------------------------------------------------------------- 
 ### 4) Running the service
 ####    i)  Locate to the root directory i.e. DataSutram_challenge 
 ####    ii)  Open terminal and execute:
         $ nodemon app
 ######   *At successful connection and running of service ,the response will be as:*   
         nodemon] 1.18.11
         [nodemon] to restart at any time, enter `rs`
         [nodemon] watching: *.*
         [nodemon] starting `node app.js`
         CONNECTED TO PORT NO=3000

        
     
 
