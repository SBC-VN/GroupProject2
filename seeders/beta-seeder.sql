DROP DATABASE IF EXISTS matcherdb_dev;
CREATE DATABASE matcherdb_dev;
USE matcherdb_dev;

DROP DATABASE IF EXISTS matcherdb_dev;
CREATE DATABASE matcherdb_dev;
USE matcherdb_dev;

CREATE TABLE Users (
	id Int AUTO_INCREMENT NOT NULL,
	firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
screenname VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
score INTEGER NOT NULL,
matches JSON,
email VARCHAR(255) ,
age INTEGER ,
locale VARCHAR(255) ,
profilepic VARCHAR(3000),
createdAt Date,
updatedAt Date,
	PRIMARY KEY (id) 
    );
    
    INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Burger 1',"2", "juice","***",12);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Bud',"Little", "user1","***",1);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Steve',"Derp", "user2","***",-18);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Warg',"Nurp", "juice","***",-100);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Joe',"Joe", "juice","***",300);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Chad',"3", "juice","***",50);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Beb',"Deedo", "juice","***",-4);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('John',"Smith", "Un2","***",-5);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Wag',"Cleevin", "juice","***",-77);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ("Beverly","Poo", "user456","***",22);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Nike',"Shox", "juice","***",150);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Honda',"Element", "juice","***",-177);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Ginger',"Jones", "user3","***",333);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Buck',"Dasher", "user1","***",47);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Steven',"Dork", "user2","***",6);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Wargon',"Nurple", "juice","***",-45);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Joey',"Joedel", "juice","***",-2);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Chad',"Ralph", "juice","***",3);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Beng',"DeRdo", "juice","***",99);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Steve',"Luke", "juice","***",-30);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('cliff',"dengst", "juice","***",200);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ("Pook","Flee", "user456","***",-12);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Nipple',"Shold", "juice","***",21);
INSERT INTO Users (firstname, lastname, screenname, password, score) VALUES ('Kawasaki',"Ninja", "juice","***",322);