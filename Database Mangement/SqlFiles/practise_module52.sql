create database employees;
use employees;
create table employees_data(

id int auto_increment,
f_name varchar(20) not null,
m_name varchar(20) null,
l_namr varchar(20) not null,
age int not null,
current_status varchar(20) not null default "employee name",
constraint pKey primary key(id)
);
desc employees_data;


CREATE TABLE cats (
    cat_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
); 


INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
       desc cats;
       
       select * from cats;
              select * from cats where breed="Tabby";
              
update cats set name="Tabby " where cat_id=7;
       select * from cats;

       