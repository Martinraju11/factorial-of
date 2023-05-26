var fact=1;
var n=parseInt(prompt("Find the factorial of:"));
for(let i=1;i<=n;i++)
	{
		fact*=i
	}
		document.write("Factorial of"+" "+n+" "+"is"+" "+fact);