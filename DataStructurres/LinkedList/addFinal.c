#include <stdio.h>
#include <stdlib.h>
struct node
{

    int value;
    struct node *next
};

struct node *head = NULL;

void addFirst(int number)
{

    struct node *new = malloc(sizeof(struct node));
    new->value = number;
    new->next = head;
    head = new;
}
void printList()
{
    struct node *temp = head;

    while (temp != NULL)
    {
        printf("%d", temp->value);
        temp = temp->next;
    }
}
int main()
{

    addFirst(10);
    addFirst(50);

    printList();
}
