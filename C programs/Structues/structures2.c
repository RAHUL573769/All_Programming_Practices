#include<stdio.h>

int main(){

struct student{

int age;
char name;
float weight;
float marks;
};
struct student student1={12,"Rhona",12.3,12.45};
struct student student2={12,"Rh",12,12};

printf("Student 1 name is %c weight is %f age is %d ",student1.name ,student1.weight ,student1.age);

return 0;
}

