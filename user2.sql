DROP DATABASE IF EXISTS matcherdb_dev;
CREATE DATABASE matcherdb_dev;
USE matcherdb_dev;

CREATE TABLE matches{
	id Int AUTO_INCREMENT NOT NULL,
deltascore INTEGER NOT NULL,
user1 VARCHAR (255) NOT NULL,
user2 VARCHAR (255) NOT NULL,
createdAt Date,
updatedAt Date,
	PRIMARY KEY (id) 
}

insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,2,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,3,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,4,curDate(),curDate());



CREATE TABLE users (
	id Int AUTO_INCREMENT NOT NULL,
	firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
screenname VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
sentimentScore INTEGER NOT NULL,
matches JSON,
email VARCHAR(255) ,
age INTEGER ,
locale VARCHAR(255) ,
profilepic VARCHAR(3000),
bio VARCHAR(3000),
createdAt Date,
updatedAt Date,
	PRIMARY KEY (id) 
    );
    
    
    
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Burger',"Whiffle", "juice","***",12, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Bud',"Little", "user1","***",1, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Steve',"Derp", "user2","***",-18, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Leif',"Nurr", "juice","***",-100, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Fred',"Scott", "juice","***",300, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Chad',"Dibbit", "juice","***",50, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Beb',"Deedo", "juice","***",-4, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Nike',"Shox", "juice","***",150, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Honda',"Element", "juice","***",-177, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Buck',"Dasher", "user1","***",47, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Steven',"Dork", "user2","***",6, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Wargon',"Nurple", "juice","***",-45, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Joey',"Joedel", "juice","***",-2, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Chad',"Ralph", "juice","***",3, "email@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Kawasaki',"Ninja", "juice","***",322, "email@email.com", 109, "Newfoundland",curDate(),curDate());