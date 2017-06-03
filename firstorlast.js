var num = Number(prompt("Enter the number"));
if (num>=100&&num<=999) 
{
    var first = (num-(num%10))/100;
   
    var last = num %10;
    if (first>last)
    {
        console.log(first + "is bigger");
    }
    else if (last>first)
    {
        console.log(last + "is bigger");
    }
    else
    {
        console.log (" = ");
    }
}
else
{
    console.log("Enter the number again");
}