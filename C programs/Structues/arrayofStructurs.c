
#include<stdio.h>

struct student{
char name[50];
int age;
int roll;

}s;
int main(){

struct student s[3];
int i;
printf("Enter student details");
for(i=0;i<3;i++){

    scanf("%s %d %d",&s[i].name,&s[i].age,&s[i].roll);
}

for(i=0;i<3;i++){

    printf("%s %d %d",s[i].name,s[i].age,s[i].roll);
}

return 0;
}



