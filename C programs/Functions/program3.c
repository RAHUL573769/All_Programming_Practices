// Input Format:
// Input consists of a single line, two integers with space separated.

// Output Format:
// The output consists of a single line, which displays the sum value.

#include<stdio.h> 


int sum(int a,int b){
int sum;
sum=a+b;
return sum;
}
int main()
{
  int a,b,c;
  scanf("%d %d",&a,&b);
  c=sum(a,b);
  printf("%d",c);
    return 0; 
}