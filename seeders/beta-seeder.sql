-- DROP DATABASE IF EXISTS matcherdb_dev;
-- CREATE DATABASE matcherdb_dev;
USE matcherdb_dev;
-- DROP TABLE users;

-- CREATE TABLE users (
-- 	id Int AUTO_INCREMENT NOT NULL,
-- 	firstname VARCHAR(255) NOT NULL,
-- lastname VARCHAR(255) NOT NULL,
-- screenname VARCHAR(255) NOT NULL,
-- password VARCHAR(255) NOT NULL,
-- sentimentScore INTEGER NOT NULL,
-- matches JSON,
-- email VARCHAR(255) ,
-- age INTEGER ,
-- locale VARCHAR(255) ,
-- profilepic VARCHAR(3000),
-- bio VARCHAR(3000),
-- createdAt Date,
-- updatedAt Date,
-- 	PRIMARY KEY (id) 
--     );
    
insert into matches
    (deltascore, user1, user2, createdAt, updatedAt)
values
    (5, 1, 2, curDate(), curDate());
insert into matches
    (deltascore, user1, user2, createdAt, updatedAt)
values
    (5, 1, 3, curDate(), curDate());
insert into matches
    (deltascore, user1, user2, createdAt, updatedAt)
values
    (5, 1, 4, curDate(), curDate());



INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Burger',"Whiffle", "juice","***",12, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Bud',"Little", "user1","***",1, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Steve',"Derp", "user2","***",-18, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Leif',"Nurr", "juice","***",-100, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Fred',"Scott", "juice","***",300, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Chad',"Dibbit", "juice","***",50, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Beb',"Deedo", "juice","***",-4, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Nike',"Shox", "juice","***",150, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Honda',"Element", "juice","***",-177, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Buck',"Dasher", "user1","***",47, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Steven',"Dork", "user2","***",6, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Wargon',"Nurple", "juice","***",-45, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Joey',"Joedel", "juice","***",-2, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Chad',"Ralph", "juice","***",3, "email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Kawasaki',"Ninja", "juice","***",322, "email@email.com", 109, "Newfoundland");