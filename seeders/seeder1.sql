

-- updated seeder by: john

use matcherdb_dev;
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