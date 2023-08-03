#include <stdio.h>
#define size 5
int stack[size];
int top = -1;

int isFull()
{

    if (top == size - 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void pushAnElement(int value)
{

    if (isFull() == 1)
    {
        printf("Stack is Full");
    }
    else
    {
        top++;
        stack[top] = value;
    }
}
int isEmpty()
{
    if (stack[size] == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
int pop()
{

    int data;
    if (!isEmpty() == 1)
    {
        printf("Stack is Empty");
    }
    else
    {
        data = stack[top];
        top--;
        return data;
    }
}

int peek()
{
    return stack[top];
}
int main()
{

    pushAnElement(10);
    pushAnElement(20);
    pushAnElement(30);
    printf("%d", peek());

    printf("Elements are");
    int data = pop();
    printf("%d", data);
        return 0;
}
