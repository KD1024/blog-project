# blog-project

The project is a sprint server create for saving, checking, updating, deleting a list of blogs. It has mainly three parts, a database, a sprint project, and an Angular project for the frontend. Following is the instruction on how to start the project.

You need to have mySQL ready on your computer, then go to ````\blog-project-maven\src\main\resources````

​	find the file **database.sql**, switch the **aaa** for your existing database or use this to create a new one, and run this sql file.

````sql
CREATE DATABASE aaa;
USE aaa;
````

​	now you have the database setup for this project, remember to make it running.

Set up the sprint project, use your IDE to build the project through maven, and go to ````\blog-project-maven\src\main\resources```` again,

​	find the file **application.properties**, set mySQL local port (here is port *3306*), database name (here is *sakila*), and username and password here.

````sql
spring.datasource.url=jdbc:mysql://localhost:3306/sakila?useSSL=false
spring.datasource.username=root
spring.datasource.password=root
````

Then use your IDE find the following file ````\blog-project-maven\src\main\java\CMSC589\App.java```` run the main class in this file, thus the Sprint server is running. 

Finally we need to run the Angular app, go to ````\blog-web-app```` and with angular proper installed, you can run the following command to make the UI ready

````
npm install
ng serve
````

