use booksDb;
select * from books;
select title as Title from books limit 10,2;

select released_year ,count(*) from books group by released_year;

select title from books where released_year!=2020;
select title ,pages as BookTitlePages from books where pages between 100 and 300 and title='The Namesake';