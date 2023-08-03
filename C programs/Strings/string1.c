// Write a C program to declare and initialize a string "Hello World" with direct initialization method as well as character by character initialization method. And also print the character 'W' from the string. 

#include<stdio.h> 

int main()
{
   //Edit below this line
char word[50]="Hello World";
// char word2[12]={"H","E","L","L","O","","W","O","R","L","D","\0"};
char word2[11]={'H','E','L','L','O','W','O','R','L','D','\0'};
printf("%s",&word[5]);

printf("%s",word);
    return 0; 
}