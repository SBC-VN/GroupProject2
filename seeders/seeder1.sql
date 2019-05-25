use matcherdb_dev;
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic) values ('first','user','one','one','user1',55,curDate(),curDate(),18,'Timbuktoo','b-ghosncharge-a-20181211-870x580.jpg');
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic) values ('second','user','two','one','user2',55,curDate(),curDate(),19,'Jersey City','bearhead.jpg');
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic) values ('third','user','three','one','user3',55,curDate(),curDate(),20,'Castries','1_Ubg_-LZH_ZMI5I9zbwczTw.png');
insert into users (firstname, lastname, screenname, password, email, score, createdAt, updatedAt, age, location,profilepic) values ('third','user','four','one','user4',55,curDate(),curDate(),21,'LosVegalos','b-ghosncharge-a-20181211-870x580.jpg');
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,2,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,3,curDate(),curDate());
insert into matches (deltascore, user1, user2, createdAt, updatedAt) values (5,1,4,curDate(),curDate());