select upper("Hello woeld") as uppercharacter;
select cos(0);
use employeedb;
show tables;
desc employees;
select * from employees;
select * from department;
select * from employees e inner join department d on e.department_id=d.department_id;

select p.employee_id,p.name from employees p inner join department d on p.department_id=d.department_id;
select   * from employees p inner join department d on p.department_id=d.department_id;


select max(salary) from employees;
select min(salary) from employees;
select count(salary) as TotalSalary from employees;
select avg(salary) from employees;
select sum(
salary) from employees;
select * from 

