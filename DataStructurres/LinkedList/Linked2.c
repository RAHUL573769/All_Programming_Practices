#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL;

void addFirst(int val)
{
    struct node *newNode=malloc(sizeof(struct node));
    newNode->data=val;
    newNode->next=head;
    head=newNode;

}

//Don't change the below code
void printList()
{
    struct node *temp = head;

    while(temp != NULL)
    {
         printf("%d ", temp->data);
         temp = temp->next;
    }
}

int main()
{

     addFirst(10);
     addFirst(20);
     addFirst(30);
     printList();

     return 0;
}