

int fibonacciFunction(int n){
    int i ,Fib[n+1];
    Fib[0]=0;
    Fib[1]=1;
    for(i=2;i<=n;i++){
        Fib[i]=Fib[i-1]+Fib[i-2];
    }
    return Fib[n];

}

#include<stdio.h>
int main(){

int n;
printf("Enter the value of N");
scanf("%d",&n);
if(n==1){
    printf("Fibonacci of %d is %d",n,n);
}
else{
    int c=fibonacciFunction(n);
       printf("Fibonacci of %d is %d",n,c); 
}
return 0;

 
}
