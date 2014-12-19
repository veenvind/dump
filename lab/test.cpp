#include<iostream>
#include<string>
using namespace std;
int main()
{
  int T,i,j,unique;
  char newchar[26];
  string str;
  cin >> T;
  for(i=0;i<T;i++)
  {
    for(j=0;j<26;j++)
    	newchar[j]=0;
    cin >> str;
    cout << str;
    j=unique=0;
    while(str[j]!='\0')
    {
      if(newchar[j] == 0)
      {
        newchar[j] = 1;
        unique++;
      }
    }
    cout << unique << "\n";
  }
  return 0;
} 
