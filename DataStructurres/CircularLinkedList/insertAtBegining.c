
#include <stdio.h>
#include <stdlib.h>
struct node
{
    ;
    int data;
    struct node *next;
};
struct node *head, *middle, *last;
struct node *head = NULL;
void insertAtBeginning(int value)
{

    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = value;
    if (head == NULL)
    {
        newNode->next = newNode;
        head = newNode;
    }
    else
    {
        struct node *temp = head;

        while (temp->next != head)
        {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
        head = newNode;
    }
}

void insertAtLast(int value)
{

    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = value;
    if (head == NULL)
    {
        newNode->next = newNode;
        head = newNode;
    }
    else
    {
        struct node *temp = head;

        while (temp->next != head)
        {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
    }
}

void display()
{
    if (head == NULL)

        return;
    struct node *temp = head;

    do
    {
        printf("%d \n", temp->data);
        temp = temp->next;
    } while (temp != head);
}

int main()

{

    head = malloc(sizeof(struct node));
    middle = malloc(sizeof(struct node));
    last = malloc(sizeof(struct node));

    head->data = 60;
    middle->data = 20;
    last->data = 30;
    head->next = middle;
    middle->next = last;
    last->next = head;
    // display();
    insertAtBeginning(10);
    insertAtBeginning(50);
    insertAtBeginning(110);
    insertAtLast(90);
    display();

    return 0;
}