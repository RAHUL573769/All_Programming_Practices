create database catsDb;
use catsDb;
create table cats(
cats_id int not null default '10',
cats_name varchar(20) not null

);
desc cats;
insert into cats(cats_id,cats_name) values(1,'Rocky');
select * from cats;
insert into cats(cats_name) values('Rocky');
ALTER TABLE cats MODIFY cats_id  int primary key AUTO_INCREMENT;
ALTER TABLE cats MODIFY cats_name  varchar(20)   null;

