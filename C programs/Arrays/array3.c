#include<stdio.h>

int main()
{
   int size;

   scanf("%d", &size);
   for(int i=0;i<size;i++);
   int arr[size];

   for(int i=0;i<size;i++){
       scanf("%d",&arr[i]);
   }

   for(int i=0;i<size;i++){
       printf("%d",arr[i]);
   }



    return 0;
}
