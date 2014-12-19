/*Find the no. "lines" that can be created that pass through
at least 2 points of the n*m matrix. */

#include<stdio.h>

void main(){
	int rows,cols,i,j,a,b,matrix[5000][5000],posLines=0;
	int x,y;
	printf("Rows of matrix:");
	scanf("%d",&rows);
	printf("Columns of matrix:");
	scanf("%d",&cols);
	
	posLines += rows;
	for(i=0;i<rows;i++)
		for(j=0;j<cols;j++)
		{
			for(a=0;a<rows;a++)
				for(b=0;b<cols;b++)
					matrix[a][b]=0;
			a=i+1;
			while(a<rows)
			{
				for(b=0;b<cols;b++)
				{
					if(matrix[a][b])
						continue;
					if(((i+i-a)>=0) && ((i+i-a)<rows) &&((j+j-b) >=0) && ((j+j-b)<cols))
						continue;

					x=a+a-i;
					y=b+b-j;
					while(x<rows && y < cols)
					{
						matrix[x][y] = 1;
						x+=(a-i);
						y+=(b-j);
					}
					//printf("%d %d --- %d %d\n",i,j,a,b);
					posLines++;
				}
				a++;
			}
		}
	printf("Total possible lines are: %d\n",posLines);
}
