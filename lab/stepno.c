/*
step numbers are number with consecutinve digits one more or less than previous no.s
eg: 12, 123, 121, 321, 1231, 1212 ....
*/
#include<stdio.h>
main(){
	int min,max,i;
	printf("Lower Range of stepping No:");
	scanf("%d",&min);
	printf("Upper Range of stepping No:");
	scanf("%d",&max);

	if(min <= 0 && max >= 0)
		printf("0\n");

	for(i=1;i<10;i++)
		stepno_gen(i,min,max);

}

int stepno_gen(stepno,min,max)
{
	int rem;
	if(stepno >= min && stepno <= max)
		printf("%d\n",stepno);
	if(stepno==1)
		printf("stepno is 1");
	if(stepno >= max)
		return;

	rem = stepno%10;

	if(rem != 0)
		stepno_gen(stepno*10+rem-1,min,max);
	if(rem != 9)
		stepno_gen(stepno*10+rem+1,min,max);
}
