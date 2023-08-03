#include <stdio.h>

void displayArray(int array[], int n)
{
    int i;

    for (i = 0; i < n; i++)
    {

        printf("%d", array[i]);
        printf("\n");
    }
}
int main()
{

    int array[100] = {1, 2, 3, 4};
    int index = 3;
    int arraySize = 10;
    int element = 9;
    printf("Array Before Insertion");

    displayArray(array, 4);
    insertAtIndex(array, 3, arraySize, element, 100);
    arraySize += 1;
    printf("Array After Insertion");

    displayArray(array, arraySize);

    indexDelete(array, index, arraySize);
    printf("Array After Deletion");
    displayArray(array, arraySize);
    return 0;
}
indexDelete(int array[], int index, int a)
{

    for (int i = index; i < a; i++)
    {
        array[index] = array[i + 1];
    }
}
insertAtIndex(int array[], int index, int arraySize, int element, int capacity)
{

    if (arraySize > capacity)
    {
        printf("aRAAY IS erroer");
    }

    for (int i = arraySize - 1; i > index; i--)
    {
        array[i + 1] = array[i];
    }
    array[index] = element;
}
