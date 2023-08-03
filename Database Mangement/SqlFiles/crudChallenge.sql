create database shirts_db;
use shirts_db;
create table shirts(
shirt_id int,
article varchar(20),
color varchar(20),
shirt_size varchar(20),
last_worn int
);
Alter table shirts Modify  shirt_id int primary key; 
desc shirts;
insert into shirts(shirt_id,article,color,shirt_size,last_worn) values ('1','t-shirt', 'white', 'S', 10),
('2','t-shirt', 'green', 'S', 200),
('3','polo shirt', 'black', 'M', 10),
('4','tank top', 'blue', 'S', 50),
('5','t-shirt', 'pink', 'S', 0),
("6",'polo shirt', 'red', 'M', 5),
("7",'tank top', 'white', 'S', 200),
( "8",'tank top', 'blue', 'M', 15);

desc shirts;
select * from shirts;
insert into shirts(shirt_id,article,color,shirt_size,last_worn) values ('9','polo shirt','purple','M',50);
select * from shirts;
select article,color from shirts;
select * from shirts;
select article,color,shirt_size,last_worn from shirts where shirt_size='M';
select * from shirts;
update shirts set shirt_size='L' where article="polo shirt";
select shirt_size from shirts where article="polo shirt";


update shirts set last_worn=0 where last_worn=15;

select shirt_size ,color from shirts shirt_size ,color;
update shirts set shirt_size='Xs ' ,color='off white'  where color='white';
select shirt_size ,color from shirts where color='off white';

select * from shirts;
delete from shirts;