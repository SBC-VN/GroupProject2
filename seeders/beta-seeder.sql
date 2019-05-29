DROP DATABASE IF EXISTS matcherdb_dev;
CREATE DATABASE matcherdb_dev;
USE matcherdb_dev;

CREATE TABLE matches(
	id Int AUTO_INCREMENT NOT NULL,
deltascore INTEGER NOT NULL,
user1 VARCHAR (255) NOT NULL,
user2 VARCHAR (255) NOT NULL,
createdAt Date,
updatedAt Date,
	PRIMARY KEY (id) 
);

insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,2,curDate(),curDate());
-- insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,3,curDate(),curDate());
-- insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,4,curDate(),curDate());



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
    
    
    
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Burger',"Whiffle", "22juice","***",12, "email1@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Bud',"Little", "user111","***",1, "email2@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Steve',"Derp", "user2322","***",-18, "email3@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Leif',"Nurr", "juice23423423","***",-100, "email4@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Fred',"Scott", "juice2342","***",300, "email5@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Chad',"Dibbit", "juice55","***",50, "email6@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Beb',"Deedo", "juice66","***",-4, "email7@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Nike',"Shox", "juiceerter","***",150, "email8@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Honda',"Element", "juice565","***",-177, "email9@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Buck',"Dasher", "user1rr","***",47, "email@email11.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Steven',"Dork", "user2vgb","***",6, "email@email111.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Wargon',"Nurple", "juicesera4","***",-45, "email1111@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Joey',"Joedel", "juice33","***",-2, "email11111@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Chad',"Ralph", "juiceergdg","***",3, "email222@email.com", 109, "Newfoundland",curDate(),curDate());
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale,createdAt,updatedAt) VALUES ('Kawasaki',"Ninja", "juicerdgsh","***",322, "email3333@email.com", 109, "Newfoundland",curDate(),curDate());