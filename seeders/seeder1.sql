use matcherdb_dev;
insert into users
    (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic)
values
    ('first', 'user', 'one', 'one', 'user1', 55, curDate(), curDate(), 18, 'Timbuktoo', 'b-ghosncharge-a-20181211-870x580.jpg');
insert into users
    (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic)
values
    ('second', 'user', 'two', 'one', 'user2', 55, curDate(), curDate(), 19, 'Jersey City', 'bearhead.jpg');
insert into users
    (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic)
values
    ('third', 'user', 'three', 'one', 'user3', 55, curDate(), curDate(), 20, 'Castries', '1_Ubg_-LZH_ZMI5I9zbwczTw.png');
insert into users
    (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic)
values
    ('third', 'user', 'four', 'one', 'user4', 55, curDate(), curDate(), 21, 'LosVegalos', 'b-ghosncharge-a-20181211-870x580.jpg');
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


-- updated seeder by: john
use matcherdb_dev;
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Burger', "Whiffle", "juice", "***", 12, "dog@email.com", 109, "Newfoundland");
INSERT INTO users
    (firstname, lastname, screenname, password, sentimentScore, email, age, locale)
VALUES
    ('Bud', "Little", "user1", "***", 1, "cat@email.com", 109, "Newfoundland");
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