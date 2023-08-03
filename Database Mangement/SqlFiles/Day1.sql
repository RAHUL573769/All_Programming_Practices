create database studentinfo;
use studentinfo;
desc students;
create table students(

roll int,
name varchar(20),
contact varchar(40),
email varchar(20)

);
insert into students(roll,name,contact,email) values (12,'Rahul','69,Souj','rahul@gmail.com');
insert into students(roll,name,contact,email) values (11,'Rahu','69,Suj','ahul@gmail.com');
select * from students where name="Rahul";