// In the below program, make the pointer variable 'ptr' refers to the integer variable 'i' and print the address and value of 'i' using ptr.



#include<stdio.h>

int main()
{
    int i = 100;
    int *ptr=&i;

printf("%d\n",*ptr);
printf("%d",ptr);

    return 0;
}

