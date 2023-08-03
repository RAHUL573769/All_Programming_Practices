#include<stdio.h>
int sum(int,int);

void main(){

int s=0,a,b;
int (*ptr)(int,int)=&sum;
scanf("%d %d",&a,&b);
s=(*ptr)(a,b);
printf("sum is %d\n",s);
}

int sum(int a,int b){


return a+b;
}
