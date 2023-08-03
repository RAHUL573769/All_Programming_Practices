#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *previous;
};

struct Node *first;
struct Node *second;
struct Node *third;

void traversal()
{
    struct Node *p = first;

    while (p != NULL)
    {

        printf("%d", p->data);
        p = p->previous;
    }
}
int main()
{

    first = malloc(sizeof(struct Node));
    second = malloc(sizeof(struct Node));
    third = malloc(sizeof(struct Node));
    first->data = 10;
    first->previous = second;
    second->data = 23;
    second->previous = third;
    third->data = 12;
    third->previous = NULL;
    traversal();

    return 0;
}