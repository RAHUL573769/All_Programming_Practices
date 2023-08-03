// Write a C program to get a string 'str' from the user and print its length without using any inbuilt functions. 
//  0 < Length of str  <= 1000 



#include<stdio.h> 

int main()
{
   //Edit below this line
char name[100];
scanf("%s",name);
printf("%d",strlen(name));
    return 0; 
}