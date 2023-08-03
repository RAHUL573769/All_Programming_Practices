#include<stdio.h>

#define V 5


void init(int arr[][V])
{
    int i,j;
    for(i = 0; i < V; i++)
        for(j = 0; j < V; j++)
            arr[i][j] = 0;
}

void addEdge(int arr[][V],int src, int dest)
{
     arr[src][dest] = 1;   
}

void printAdjMatrix(int arr[][V])
{
     int i, j;

     for(i = 0; i < V; i++)
     {
         for(j = 0; j < V; j++)
         {
             printf("%d ", arr[i][j]);
         }
         printf("\n");
     }
}

int hasEdge(int arr[][V], int src, int dest)
{
    if(arr[src][dest] == 1)
        return 1;

    return 0;
}

void removeEdge(int arr[][V], int src, int dest)
{
    arr[src][dest] = 0;
}

int main()
{
    int adjMatrix[V][V];
    
    init(adjMatrix);

    printf("Adding Edge From 0 to 1\n");
    addEdge(adjMatrix,0,1);
    printf("Adding Edge From 0 to 2\n");
    addEdge(adjMatrix,0,2);
    printf("Adding Edge From 0 to 3\n");
    addEdge(adjMatrix,0,3);
    printf("Adding Edge From 1 to 3\n");
    addEdge(adjMatrix,1,3);
    printf("Adding Edge From 1 to 4\n");
    addEdge(adjMatrix,1,4);
    printf("Adding Edge From 2 to 3\n");
    addEdge(adjMatrix,2,3);
    printf("Adding Edge From 3 to 4\n");
    addEdge(adjMatrix,3,4);

    printf("Adjacency Matrix Representation of the Graph\n");
    printAdjMatrix(adjMatrix);

    printf("Removing Edge(0, 2)..\n");
    removeEdge(adjMatrix,0,2);

    printf("Adjacency Matrix Representation of the Graph\n");
    printAdjMatrix(adjMatrix);

    printf("(0,1) has Edge?\n");
    if(hasEdge(adjMatrix,0, 1) == 1)
        printf("Edge Found\n");
    else
        printf("Edge Not Found\n");

    printf("(0,2) has Edge?\n");
    if(hasEdge(adjMatrix,0, 2) == 1)
        printf("Edge Found\n");
    else
        printf("Edge Not Found\n");

    return 0;   
}
