use matcherdb_dev;
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt) values ('first','user','one','one','user1',55,curDate(),curDate());
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt) values ('second','user','two','one','user2',55,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,2,curDate(),curDate());
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt) values ('third','user','three','one','user3',55,curDate(),curDate());
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt) values ('third','user','four','one','user4',55,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,3,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,4,curDate(),curDate());