/* eslint-disable */
// Numbers
const age = 100;
const money = 1000.50
console.log('typeof ' + typeof age);
console.log('typeof ' + typeof money);

const name1 = 'John';
console.log('typeof ' + typeof name1);

// math with Strings
const strx = "100";
const stry = "100";
// Auto convert to number and multiply / Division / subtraction
console.log("strx*stry="+strx*stry); 
console.log("20*stry="+(20*stry)); 
// Concat with + operator
 console.log("strx+stry="+(strx+stry));
// Multiply and concat right to left
console.log("strx+strx*stry="+strx+strx*stry); 
const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
const dadGets = sweets % kids;
console.log(`Each kids gets ${eachKidGets}`);
console.log(`Dad gets ${dadGets}`);
console.log(`0.1+0.2=`+(0.1+0.2));

// always work with whole nos. Avoid fractions
const price = 10.2;
const discount = 1.1;

//const price = 1034;
console.log(`Net=`+(price+discount));

// 10**2 10 to the power of 2
console.log(`10**10=`+(10**10));
console.log(`10**2=`+(10**2));
console.log(`1000**20=`+(1000**20));
console.log(`1000**200=`+(1000**200)); // infinity
console.log(`typeof Infinity=`+ (typeof Infinity)); // typeof Infinity==> number
console.log(`typeof -Infinity=`+ (typeof -Infinity)); // typeof -Infinity==> number

//NAN not a number
console.log('10/dog='+(10/'dog'));
console.log(`typeof NAN=`+ (typeof NAN)); // typeof NAN==> number

// check the datatype of the parameter before processing them
function foo(data)
{
    if(Number.isInteger(data))
    {
        console.log('WE HAVE A NUMBER');
    }
    else if(typeof data === 'string')
    {
        console.log('WE HAVE A String');
    }    
    else if(typeof data === `boolean`)
    {
        console.log('WE HAVE A Boolean');
    }
    else if(typeof data === `object`)
    {
        console.log('WE HAVE An Object');
    }
    else
    {
        console.log('Else We got a ' + typeof data);
    }
}
console.log(`***************`);
foo(100);
foo(`Hello`);
foo(true);
foo([1,2,3,4]);
// end of numbers
