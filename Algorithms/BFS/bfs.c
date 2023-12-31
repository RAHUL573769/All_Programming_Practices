#include <stdio.h>
#define size 25
#define V 5

int Queue[size];

int front = 0;
int rear = 0;

int isQueueEmpty() 
{
    if(front == rear)
        return 1;
    return 0;
}

int dequeue()
{
    if(front == rear)
        return -1;
    else 
    {
        int temp = Queue[front];
        front++;
        return temp;
    }
}

void enqueue(int val)
{
    if(rear == size)
        return;
    else 
    {
        Queue[rear] = val;
        rear++;
    }
}

void bfs(int arr[V][V], int source)
{
    int isVisited[V] = {0};
    int index;
    
    enqueue(source);
    isVisited[source] = 1;
    
    while(!isQueueEmpty())
    {
        int node = dequeue();
        printf("Visited Node : %d\n",node);
        
        for(index = 0; index < V; index++)
        {
            if(arr[node][index] == 1 && isVisited[index] == 0)
            {
                enqueue(index);
                isVisited[index] = 1;
            }
        }
        
    }
}

int main() 
{
    int arr[V][V] = {
                        {0, 1, 1, 1, 0},
                        {1, 0, 0, 1, 1},
                        {1, 0, 0, 1, 0},
                        {1, 1, 1, 0, 1},
                        {0, 1, 0, 1, 0}
                    };
    
    printf("BFS of the given graph is : \n");
    bfs(arr,0);
    
    return 0;
}