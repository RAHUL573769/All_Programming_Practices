// Write a function named max which accepts two integers as a parameter and returns the maximum of those two integers.

// Input Format:
// Input consists of a single line, two integers separated by spaces.

// Output Format:
// The output consists of a single line, which displays the maximum value.


#include<stdio.h> 

int main()
{
   //Edit below this line
int a,b,c;
scanf("%d %d",&a,&b);
c=max(a,b);
printf("%d",c);
    return 0; 
}

int max(int a ,int b){
    
    if(a>b){
        return a;
    }
    else{
        return b;
    }
    
}