#include <stdio.h>
#include <stdlib.h>

struct node
{

    int data;
    struct node *next;
};
struct node *first;
struct node *middle;
struct node *last;

struct node *head = NULL;

void insertAtBeginning(int value)
{

    struct node *newNode = malloc(sizeof(struct node));

    newNode->data = value;
    newNode->next = head;
    head = newNode;
}

void insertAtLast(int value)
{

    struct node *head = NULL;

    struct node *newNode = malloc(sizeof(struct node));

    newNode->data = value;
    newNode->next = NULL;
    if (head == NULL)
    {
        head = newNode;
    }
    else
    {
        struct node *last = head;
        while (last != NULL)
        {

            last = last->next;
        }
        last->next = newNode;
    }
}
void traversal()
{
    struct node *temp = head;
    while (temp != NULL)
    {
        printf("The value is %d \n", temp->data);
        temp = temp->next;
    }
}
int main()
{

    first = malloc(sizeof(struct node));
    middle = malloc(sizeof(struct node));
    last = malloc(sizeof(struct node));
    // first->data = 16;
    // first->next = middle;
    // middle->data = 45;
    // middle->next = last;
    // last->data = 13;
    // last->next = NULL;

    traversal();
    insertAtBeginning(12);
    traversal();
    insertAtLast(23);
    traversal();
    return 0;
}