#include <stdio.h>
#include <stdlib.h>
struct node
{
    struct node *prev;
    int data;
    struct node *next;
};
struct node *head, *middle, *last;

void display()
{
    if (head == NULL)

        return;
    struct node *temp = head;

    do
    {
        printf("%d", temp->data);
        temp = temp->next;
    } while (temp != head);
}

int main()

{

    head = malloc(sizeof(struct node));
    middle = malloc(sizeof(struct node));
    last = malloc(sizeof(struct node));

    head->data = 10;
    middle->data = 20;
    last->data = 30;
    head->next = middle;
    middle->next = last;
    last->next = head;
    display();
    return 0;
}