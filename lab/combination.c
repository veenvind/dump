#include <stdio.h>
main()
{
	int count=4;  //no of the items to exchange
	int i,j,k,array[1000]; //can only do combinations of 1000 items.
	getCombinations(array,count,'0');
}

int getCombinations(int *array, int count, int pos){
	int i,temp;
	if(pos==count){
		for(i=0;i<conunt;i++)
		{
			printf("%d",*array[i]);
		}
		return 2;
	}
	for(i=1;i<count-pos;i++)
	{
		temp=array[pos];
		array[pos]=array[pos+i];
		array[pos+i]=temp;
		getCombinations(array[],count,pos+1);
		temp=array[pos];
		array[pos]=array[pos+i];
		array[pos+i]=temp;
	}
}
