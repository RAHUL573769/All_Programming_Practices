
#include <stdio.h>

int main()
{

    int a = 19;

    printf("Value of a before passing is %d \n", a);

    callByValue(&a);
    printf("Value of a before passing is %d \n", a);

    return 0;
}
void callByValue(int *a)
{

    *a = 0;
    printf("Value of a after passing is %d \n", *a);
}