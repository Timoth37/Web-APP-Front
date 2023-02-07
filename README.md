# Web-APP-Front

This project should be run from the locations directory. 
The basic layout is in place, you can find a login and a registering page.
If logged in, the location page will be accessible. 
Some comments are here to explain the main purpose of each function. 

## Backend used
I used your backend but I managed to desactivate the CORS policy. Also, I decided in the backend to see the last locations added, and not the first ones, by changing the following line of code "return Location.find().limit(limit).skip(offset)" into the following one : "return Location.find().limit(limit).skip(offset).sort({_id:-1})" in location.service.js. 

## User stories implemented

### US1
A random visitor can register and then login to see the location page. However, the "user" role will be attributed by default. The admin role should be changed by modifying the database. 

### US2
The user will be redirected to login page when clicking on "Manage the locations", as he can't access the locations without being logged in.

### US3 
The user can see a list of locations, he can display all informations related to the location by clicking on it. 

### US4
The admin can see a button add location at the top of the page. He can click on it to display a form. The most important fields are required, adress and the title of the film.

### US5
As the admin, by clicking on a location, you can directly edit the informations, then click on the modify button to update the location. You can't change the address as it is the main field of the location. The title of the film is still required. 

### US6 
As the admin user, by clicking on a location, a delete button will be displayed so you can remove a location from the database. 



