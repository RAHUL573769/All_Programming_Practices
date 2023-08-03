#include <stdio.h>

#define v 5
int main()
{
    int adj[v][v];
    init(adj);
    printf("Adding edge between 0 and 1");

    addEdge(adj, 0, 1);
    addEdge(adj, 0, 2);
    addEdge(adj, 0, 3);
    addEdge(adj, 0, 4);
    printf("Printing the Matrix");
    printf("\n");
    printMatrix(adj);

    return 0;
}

void init(int arr[][v])
{
    int i, j;
    for (i = 0; i < v; i++)
    {
        for (j = 0; j < v; j++)
        {
            arr[i][j] = 0;
        }
    }
}
void addEdge(int arr[][v], int src, int destination)
{

    arr[src][destination] = 1;
}
void printMatrix(int arr[][v])
{
    int i, j;
    for (i = 0; i < v; i++)
    {
        for (j = 0; j < v; j++)
        {
            printf("%d", arr[i][j]);
        }
        printf("\n");
    }
}