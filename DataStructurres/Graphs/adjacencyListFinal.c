#include <stdio.h>
#include <stdlib.h>

#define V 5

struct node
{
    int data;
    struct node *next;
};

struct node *adjList[V];

void init()
{
    int i;

    for (i = 0; i < V; i++)
        adjList[i] = NULL;
}

int hasEdge(int src, int dest)
{
    struct node *temp = adjList[src];

    while (temp != NULL)
    {
        if (temp->data == dest)
            return 1;
        temp = temp->next;
    }

    return 0;
}

void removeEdge(int src, int dest)
{
    if (adjList[src] == NULL)
        return;

    if (adjList[src]->data == dest)
    {
        struct node *temp = adjList[src];
        adjList[src] = adjList[src]->next;
        free(temp);
    }
    else
    {
        struct node *current = adjList[src], *temp;

        while (current->next != NULL)
        {
            if (current->next->data == dest)
            {
                temp = current->next;
                current->next = temp->next;
                free(temp);
                break;
            }
            else
                current = current->next;
        }
    }
}

void addEdge(int src, int dest)
{
    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = dest;
    newNode->next = NULL;

    if (adjList[src] == NULL)
        adjList[src] = newNode;
    else
    {
        struct node *last = adjList[src];

        while (last->next != NULL)
        {
            last = last->next;
        }
        last->next = newNode;
    }
}

void printGraph()
{
    int i;

    for (i = 0; i < V; i++)
    {
        struct node *temp = adjList[i];

        printf("adjList[%d]->", i);

        while (temp != NULL)
        {
            printf("%d->", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }
}

int main()
{
    init();

    printf("Adding Edge From 0 to 1\n");
    addEdge(0, 1);
    printf("Adding Edge From 0 to 2\n");
    addEdge(0, 2);
    printf("Adding Edge From 0 to 3\n");
    addEdge(0, 3);
    printf("Adding Edge From 1 to 3\n");
    addEdge(1, 3);
    printf("Adding Edge From 1 to 4\n");
    addEdge(1, 4);
    printf("Adding Edge From 2 to 3\n");
    addEdge(2, 3);
    printf("Adding Edge From 3 to 4\n");
    addEdge(3, 4);

    printf("Adjacency List Representation of the Graph\n");
    printGraph();

    printf("Removing Edge(0, 2)..\n");
    removeEdge(0, 2);

    printf("Adjacency List Representation of the Graph\n");
    printGraph();

    printf("(0,1) has Edge?\n");
    if (hasEdge(0, 1) == 1)
        printf("Edge Found\n");
    else
        printf("Edge Not Found\n");

    printf("(0,2) has Edge?\n");
    if (hasEdge(0, 2) == 1)
        printf("Edge Found\n");
    else
        printf("Edge Not Found\n");

    return 0;
}
