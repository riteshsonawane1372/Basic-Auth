# Basic-Auth

<i>Based on your requirement you can modify the UserSchema</i>

* Basic Authentication Requirements 

1. MongoDB Cloud Account 
2. NPM 


For MongoDB follow the link https://www.mongodb.com/
<i> My sure nodejs and npm in install </i>

<b>NodeJs</b> :- https://nodejs.org/en/download/ <div> </div>
<b>Npm</b> :- https://www.npmjs.com/ <div></div>

After cloning the repo run the following cmd 
``` bash 
npm i

```
will install all the required packages 

# LEVEL 1 

Level 1 is a very basic level of authentication Following are the packages we used 

* express js:- https://www.npmjs.com/package/express
* body parser:- https://www.npmjs.com/package/body-parser
* mongoose :-  https://www.npmjs.com/package/mongoose
* env       :- https://www.npmjs.com/package/dotenv

<i>THE PASSWORD STORED IN DB IS NOT ENCRYPTED</i>

# LEVEL 2

Level 2 overcomes all the drawbacks of Level 1 <div> </div>

In level 1 password stored in database was not encrypted 

We used the bcrypt package to encrypt the password 

* express js:- https://www.npmjs.com/package/express
* body parser:- https://www.npmjs.com/package/body-parser
* mongoose :-  https://www.npmjs.com/package/mongoose
* env       :- https://www.npmjs.com/package/dotenv
* bcrypt :-   https://www.npmjs.com/package/bcrypt


<i> How the password is encrypted </i> https://codahale.com/how-to-safely-store-a-password/





