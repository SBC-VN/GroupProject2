-- updated seeder by: joe
-- updated seeder by: john
use matcherdb_dev;
-- NEEDED MORE VALUES TO BE ABLE TO TEST
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Burger',"Whiffle", "juice1","***",12, "emai22222l@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Bud',"Little", "user12","***",1, "email@emai234l.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Steve',"Derp", "user32","***",-18, "email234@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Leif',"Nurr", "juicrre","***",-100, "email@em234ail.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Fred',"Scott", "juicese","***",300, "emai23423l@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Chad',"Dibbit", "ju12ice","***",50, "email234@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Beb',"Deedo", "juicr2re","***",-4, "emai23l@emai4l.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Nike',"Shox", "juice12r1","***",150, "email444@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Honda',"Element", "jui12rce","***",-177, "email33@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Buck',"Dasher", "user112r","***",47, "email5@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Steven',"Dork", "user12r122","***",6, "email4@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Wargon',"Nurple", "juicdsfgdge","***",-45, "4email@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Joey',"Joedel", "jsdfsdfuice","***",-2, "email3@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Chad',"Ralph", "jui444ce","***",3, "email2@email.com", 109, "Newfoundland");
INSERT INTO users (firstname, lastname, screenname, password, sentimentScore, email, age, locale) VALUES ('Kawasaki',"Ninja", "j2222uice","***",322, "email1@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Burger', "Whiffle", "juice", "***", 12, "dog@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Bud', "Little", "user1", "***", 25, "cat@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Steve', "Derp", "user2", "***", -18, "monkey@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Leif', "Nurr", "badboy", "***", -100, "giraffe@email.com", 109, "Newfoundland");
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



INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Burger', "Whiffle", "juice", "***", 12, "dog@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Bud', "Little", "user1", "***", 25, "cat@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Steve', "Derp", "user2", "***", -18, "monkey@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Leif', "Nurr", "badboy", "***", -100, "giraffe@email.com", 109, "Newfoundland");
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