-- Sparse seeder.  Just a few users and their matches.

use matcherdb_dev;
-- This is for heroku:
-- use m1x1avuh2n61xk7w;

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Testy',"McTest", "test","test",40, "test", 75, "Accidentlyfoundland", "1519345294_Tactical_facepalm.jpg", "It is not the beauty of a code you should look at; its the construction of the libraries that will stand the test of time.");

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Rex',"Leonidas", "ButterFly","one",35, "king@sparta.com", 50, "This is Sparta!", "1_Ubg_-LZH_ZMI5I9zbwczTw.png", "I am an ancient Greek king from the city-state of Sparta, best known for leading a small Greek force to hold against a much larger force at Thermopylae.");

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Lief',"Erikson", "Lief1","one",27, "Lief@norsemail.com", 75, "Notfoundland", "lief-erikson.png", "I am the second of three sons of Erik the Red, who founded the first European settlement on what is now Greenland.  I like long moonlit rides in the boat.");

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Warry',"Potter", "MagicUs","one",18, "warry2@hogwortz", 99, "LostAndfoundland", "werry.jfif", "Your'e a lizard, Warry!");

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Unseen',"User", "user4","one",-55, "unseen", 10, "Oldfoundland", "b-ghosncharge-a-20181211-870x580.jpg", "We each must do what we must do, for if we do not - what must get done will not get done.");

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('Burger',"Jones", "BJones","one",24, "burger", 119, "NeverNeverLand", "burgerpic.jpg", "Spam Spam Spam Spam... Spam Spam Spam Spam.... Spammmity Spam! Spammity Spam Spam Spam!");

insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 2, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 3, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 4, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 4, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 5, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 6, curDate(), curDate());