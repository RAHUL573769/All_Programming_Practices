


#include<stdio.h>
#include<stdlib.h>
struct Node{


    int data;
    
    struct Node *next;
};
void traversal(struct Node *ptr){




    while(ptr!=NULL){
        printf("%d",ptr->data);
        ptr=ptr->next;
    }
}


int main(){

struct Node *head;
struct Node *middle;
struct Node *last;
head=malloc(sizeof(struct Node));
middle=malloc(sizeof(struct Node));


last=malloc(sizeof(struct Node));
head->data=13;
head->next=middle;
middle->data=14;
middle->next=last;
last->data=67;
last->next=NULL;

traversal(head);


    return 0;
}

