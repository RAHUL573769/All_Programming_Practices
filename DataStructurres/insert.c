#include<stdio.h>

main(){

int n,arr[n],i;
int item,position;

int j=n-1;

printf("Enter the Elements of Array\n");
scanf("%d",&n);

for(i=0;i<n;i++){
    scanf("%d",&arr[i]);
}
printf("The %d elements are\n",n);

for(i=0;i<n;i++){
    printf("%d\n",arr[i]);
}


printf("Enter the item");
scanf("%d",&item);
printf("Enter the position");
scanf("%d",&position);

while(j>=position){
	arr[i+1]=arr[i];
}
arr[position]=item;

for(i=0;i<n;i++){
    printf("%d\n",arr[i]);
}



}
