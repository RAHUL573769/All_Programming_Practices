#include <stdio.h>
#include <stdlib.h>

struct node
{

    int data;
    struct node *next;
};

void traversal(struct node *p)
{

    while (p != NULL)
    {
        printf("%d \n", p->data);
        p = p->next;
    }
}

struct node *deleteAtFirst(struct node *first)
{

    struct node *p = first;
    first = first->next;
    free(p);
    return first;
}
int main()
{

    struct node *first;
    struct node *second;

    struct node *third;

    first = malloc(sizeof(struct node));
    second = malloc(sizeof(struct node));
    third = malloc(sizeof(struct node));
    first->data = 10;
    first->next = second;
    second->data = 20;
    second->next = third;
    third->data = 30;
    third->next = NULL;
    traversal(first);
    first = deleteAtFirst(first);
    printf("Element after");
    traversal(first);
    return 0;
}
