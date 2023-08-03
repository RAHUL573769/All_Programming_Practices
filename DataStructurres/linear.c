//#include<stdio.h>
//
//#define SIZE 5
//
//int linearSearch(int arr[], int size, int key)
//{
//    int i;
//
//    for(i = 0; i < size; i++)
//        if(arr[i] == key)
//            return 1;
//
//    return 0;
//}
//
//int main()
//{
//    int page_number[SIZE] = {86,91,34,50,0};
//
//    int key = 50;
//
//    printf("Searching Element: %d\n",key);
//
//    if(linearSearch(page_number, SIZE, key) == 1)
//        printf("Search Found\n");
//    else
//        printf("Search Not Found\n");
//
//    return 0;
//}


#include<stdio.h>
#define SIZE 5

int linearSearch(int arr[],int key,int size){
	int i;
	for(i=0;i<size;i++){
		if(arr[i]==key){
			return 1;
		}
		else{
		return 0;
		}
	}
}

int main(){
	
	
	int page[SIZE]={12,13,45,67};
	int key=50;
	printf("Searching Element %d",key);
	if((linearSearch(page,key,SIZE))==1){
		printf("Search Found");
	}else{
		printf("Search Not Foound");
	}
	return 0;
}
