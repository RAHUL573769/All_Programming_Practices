#include <stdio.h>

#include <stdlib.h>

struct node
{
    int value;
    int *next;
};
struct node *first;
struct node *middle;
struct node *last;
void printNode(struct node *p)
{
    struct node *temp = p;

    while (temp != NULL)
    {

        printf("%d \n", temp->value);
        temp = temp->next;
    }
}

void insertNodeBegin(int data)
{
    struct node *newNode;
    newNode->value = 10;
    newNode->next = first;
}
int main()
{

    first = malloc(sizeof(struct node));
    middle = malloc(sizeof(struct node));
    last = malloc(sizeof(struct node));

    first->value = 10;
    first->next = middle;
    middle->value = 20;
    middle->next = last;
    last->value = 35;
    last->next = NULL;
    printNode(first);
    insertNodeBegin(90);
    printNode(first);
}