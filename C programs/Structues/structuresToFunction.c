#include<stdio.h>


struct student{
	int roll;
	char name;
};
void fun(s);

void func(struct student);
func(struct student obj){
	
	printf("%d\n",obj.roll);
}

int main(){
struct student s={1,"Rahul"};

func(s);

return 0;
}


