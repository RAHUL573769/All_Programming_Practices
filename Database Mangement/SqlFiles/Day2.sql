create database student_info;
use student_info;
create table student(
Id int  not null primary key,
name varchar(20) not null,
phone int unique,
age int 


)

select * from student;
insert into student(id,name,phone,age) values (1,'Rahul Rudra',015241400202,12);

insert into student(id,name,phone,age) values (2,'Rahul ',015140002,12);
insert into student(id,name,phone,age) values (3,'Rudra',0135210002,12);
insert into student(id,name,phone,age) values (4,'Rohit Rudra',0521400202,12);
insert into student(id,name,phone,age) values (5,'Ratan Rudra',011400202,12);
insert into student(id,name,phone,age) values (6,'Rahula Rudra',0121400202,12);
select * from student;

update student set name='Souvik' where id=2;
select * from student;
