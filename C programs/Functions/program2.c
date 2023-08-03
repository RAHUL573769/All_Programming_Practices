// In the previous problem, we have printed the simple "Hello World" message in the display function.

// In this problem, you need to get an integer number from the user in the main function and pass it as a parameter to the function named display and print its value there.


#include<stdio.h> 

int main()
{
    int i;
   scanf("%d",&i);
display(i);
    return 0; 
}

display(int i){
    printf("%d",i);
}