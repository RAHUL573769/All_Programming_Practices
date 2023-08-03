#include<stdio.h>
#include<conio.h>

int main(){


int array[100],n,i,loc;
printf("Enter now many elements\n");
scanf("%d",&n);
printf("Enter %d elements\n",n);
for(i=0;i<n;i++){

    scanf("%d",&array[i]);
}
printf("The elements of array are\n");
for(i=0;i<n;i++){

    printf("%d\n",array[i]);
}

printf("\n Enter the location you want to delete\n");



scanf("%d",&loc);


if(loc>n){
    printf("Deletion not possible");
}

else{

        i=0;
while(i!=loc-1){
    i++;

}

while(i<n){
    array[i]=array[i+1];
    i++;
}
n--;

printf("The new Array\n");
for(i=0;i<n;i++){

    printf("%d\n",array[i]);
}

}
return 0;
}




