#include<stdio.h>
int main(){
	
	
	int array[20]={2,3,4,5,6,7,8,9,10};
	int key={2};
	if((binarySearch(array,0,9,key)==1)){
	
		printf("Search Found");
	}
	else{
		printf("Seaqch Not Found");
	}
}



int binarySearch(int array[],int start,int end,int key)
{
	
	
if(start<end){
	int mid=(start+end)/2;
	if(array[mid]==key){
		return 1;
	}
	else if(array[mid]>key){
		return binarySearch(array,mid+1,end,key);
		
	}
	else{
			return binarySearch(array,start,mid-1,key);
	}
	
}
else{
	return 0;
}
	
	
}


//#include <stdio.h>
//
//int BinarySearch(int arr[],int start,int end,int key)
//{
//    if(start <= end)
//    {
//        int mid = (start + end) / 2;
//        if(arr[mid] == key)
//            return 1;
//        if(arr[mid] < key)
//            return BinarySearch(arr,mid+1,end,key);
//        else
//            return BinarySearch(arr,start,mid-1,key);
//    }
//    else
//        return 0;
//}
//    
//void main() 
//{
//    int arr[8] = {10,23,45,70,90,100,111,123};
//    
//    int key = 45;
//    if(BinarySearch(arr,0,7,key) == 1)
//        printf("45 - Search Found\n");
//    else
//        printf("45 - Search Not Found\n");
//    
//    key = 24;
//    if(BinarySearch(arr,0,7,key) == 1)
//    	printf("24 - Search Found\n");
//    else
//    	printf("24 - Search Not Found\n");
//}
//

