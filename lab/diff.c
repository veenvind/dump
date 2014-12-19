#include<stdio.h>
#include<string.h>

main()
{
FILE *f1,*f2,*f3,*f4,*f5;
f1=fopen("test3","r");
f2=fopen("test4","r");
f3=fopen("test5","w");
f3=fopen("test6","w");
f3=fopen("test7","w");
char s1[200],s2[200];
int result;

	fgets(s1,200,f1);
	fgets(s2,200,f2);
while(1)
{
	result=strcmp(s1,s2);
	//printf("%s,%s,%d\n",s1,s2,result);
	if(result==0)
//	if(1)
	{
		//printf("match");
		printf("%s,1",s1);
		fgets(s1,200,f1);
		fgets(s2,200,f2);
		//printf("%d",result);
	}
	else if(result<0)
	{
		printf("%s,2",s1);
		fgets(s1,200,f1);
	}
	else
	{
		printf("%s3",s2);
		fgets(s2,200,f2);
	}

if (feof(f1)||feof(f2))                   /* End of file reached */
    break;

}

}
