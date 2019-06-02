-- Sparse seeder.  Just a few users and their matches.

use matcherdb_dev;

INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('first',"user", "second","one",12, "email1", 109, "Newfoundland", "1_Ubg_-LZH_ZMI5I9zbwczTw.png", "This is my heart beat song...");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('second',"user", "user1","one",1, "email2", 109, "Notfoundland", "bearhead.jpg", "The child is the father of the man.");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('third',"user", "user3","one",-18, "email3", 109, "Accidentlyfoundland", "1519345294_Tactical_facepalm.jpg", "There is no try, there is only do-do in the code");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('fourth',"user", "user4","one",-18, "email4", 109, "Oldfoundland", "b-ghosncharge-a-20181211-870x580.jpg", "We each must do what we must do, for if we do not - what must get done will not get done.");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('fifth',"user", "user5","one",40, "email5", 109, "LostAndfoundland", "werry.jfif", "Your'e a lizard, Warry!");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale, profilepic, bio) VALUES ('sixth',"user", "user6","one",40, "email6", 109, "NeverNeverLand", "burgerpic.jpg", "Spam Spam Spam Spam... Spam Spam Spam Spam.... Spammmity Spam! Spammity Spam Spam Spam!");

insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 2, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 3, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 1, 4, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 4, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 5, curDate(), curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5, 2, 6, curDate(), curDate());