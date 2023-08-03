#include<stdio.h>

struct mobile{

    char brand[10];
    int price;
    char colour[10];
}m;

int main()
{
   //Edit below this line

scanf("%s \n %d\n %s",&m.brand,&m.price,&m.colour);

printf("%s \n %d\n %s",m.brand,m.price,m.colour);

    return 0;
}

