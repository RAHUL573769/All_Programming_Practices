#include<stdio.h>

int main(){

int n,k,i;
scanf("%d %d",&n,&k);
for(i=0;i<k;i++)
{

int lastDigit=n%10;
if(lastDigit!=0){
    n=n-1;
}
else{
    n=n/10;
}
printf("%d\n",n);
}

return 0;
}
