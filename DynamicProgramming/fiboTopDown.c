#include<stdio.h>
int array[100];

initFunction(){

for(int i=0;i<100;i++)
{
    array[i]=-1;
}
}

int Fibonacci(int n){

if(array[n]==-1){
if(n<=1){
    array[n]=n;
}
else{

array[n]=Fibonacci(n-1)+Fibonacci(n-2);
}
return array[n];

}


}
int main(){

initFunction();

int i;
int n=7;
if(n==1){
printf("Fibonacci of %d is %d",n,n);
}
else{
printf("Fibonacci of %d is %d",n,Fibonacci(n));
}
    return 0;
}