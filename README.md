### 1)  The project is done using Node.js framework Express.js
----------------------------------------------------------------------------

### 2)  Installation:
#### i)   Install Node.js	
#####  If required , install the modules express,router, body-parser,jsonwebtoken,uuid, nodemon,moment in the root directory

        npm install express  router body-parser jsonwebtoken uuid nodemon moment express-validator
            
----------------------------------------------------------------------------

### 3)  Services:
##### There are two services:

i) GET API call to generate JWT key,given the _username_ and  _password_ of user in the body of request. To generate _**JWT key**_  , jsonwebtoken module is used (implementation details are in controller directory)

ii) GET API call to generate user ID, given _username_ , _password_ , _dateofbirth_ , _name_  of user in the body of the  request.To generate _**user_ID**_  , uuid module has been used (implementation details are in controller directory)

--------------------------------------------------------------------------------
### 4)   Validations:

###### Validations are done in the middleware functions located in the helper/index.js 
   
 i) For _username_ ,_password_ and _name_ validations are done using express-validator module
   
 ii) For _date_ ,validation is done using moment.js
 
 --------------------------------------------------------------------------- 
 
 ### 5) Running the service:
 
 #### i)  Locate to the root directory i.e. DataSutram_challenge 
 #### ii)  Open terminal and execute:
         $ nodemon app
 ###### *At successful connection and running of service ,the response will be as:*   
         nodemon] 1.18.11
         [nodemon] to restart at any time, enter `rs`
         [nodemon] watching: *.*
         [nodemon] starting `node app.js`
         CONNECTED TO PORT NO=3000
----------------------------------------------------------------------------------

        
     
 
