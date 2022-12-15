// Strings Exercise: full stop

function addFullStop(myString){
    if ( (myString[myString.length-1]) !='.')
      return(myString+'.');
    else
      return(myString);

}

console.log(addFullStop("hello world"));
console.log(addFullStop("hello world."));
console.log(addFullStop("adsdasw"));
console.log(addFullStop("123."));
console.log(addFullStop("#8$%^&"));


// Arrays Exercise 1: Breakfast list array

const breakfastArray = [ "tea", "biscuit","meusli"];

console.log(breakfastArray);

// add an item

breakfastArray.push("boiled egg and soldiers");

console.log(breakfastArray);

// add another at front

breakfastArray.unshift("orange juice");

console.log(breakfastArray);

// Arrays Exercise 2: last value in array

function lastval(myarray){

    return(myarray[myarray.length-1]);
}

console.log(`last value in array is: ${lastval(breakfastArray)}`);

// Arrays Exercise 3: music... look to using splice and other methods

let musicGenres=["Rock","rap"];

musicGenres.push("jazz");
console.log(musicGenres);

// ascertain middle of list, odd numbers will be biased one position either side not central

let len=(musicGenres.length);
let indexval=Math.ceil(len/ 2);
console.log(indexval);

// now add "classical" to the array at central position using splice

musicGenres.splice(indexval,0,"classical");
console.log(musicGenres);

// now prepend "Blues" and "reggae"

musicGenres.unshift("reggae");
musicGenres.unshift("blues");
console.log(musicGenres);



// Arrays Exercise 4: Alphabetic sort

// using breakfast array as a test and maybe localcompare??

function alphaSort(myArray){

    let sorted=false;
    let n=0;
    let len=myArray.length;
    let temp1;                       // temp var for general use
    let temp2;
    let allString=true;                 // temp boolean for general use
    
    // do initial check of values to ensure they are strings

    for( temp=0; temp<myArray.length; temp++){
        if( typeof myArray[temp] !== "string" ) allString=false;
    }

    if (( len<=1) || !allString )
        return(myArray);             // one element array passed in or 
    else                             // not a full string array
    {
       while(!sorted){
             sorted=true;   // if we get through array with no swaps this 
                            // will remain set to true
             n=0;
             while( n<(len-1) )
             {
                temp1=myArray[n];
                temp2=myArray[n+1];

                if ((temp1.localeCompare(temp2)==1)){
                    temp1=myArray[n+1];                 // if out of order swap
                    myArray[n+1]=myArray[n];
                    myArray[n]=temp1;
                    sorted=false;
                }
                n++;
            }

       }

       return(myArray);
    }
  
}

const alphaArray=["ty","kiyyj","4546bfb","lopuui","qasdff","#765","zsdef",      "asdfd","vxdfdsf"];

console.log(alphaSort(alphaArray));
console.log(alphaSort(breakfastArray));

// Loops Exercise 1: logged count

for( let i=0; i<10; i++) console.log(`count is ${i+1}`);

for( let i=10; i>0; i--) console.log(`count is ${i}`);

// Loops Exercise 2: Even numbers 1

for( let i=1; i<=10; i++) 
  if ( !(i & 0x01) ) console.log(`even numbers are is ${i}`);

// Loops Exercise 3: Last loop value

i=3;   // uncomment to run as alerts are a nuisance
/*
while(i){
    alert(i--);
}
*/
console.log(`Last i value is ${i+1}`);

// Loops Exercise 4: replace for loop

let x=0;
/*
while( x<3){
    alert(`number ${x}!`);
    x++;
}*/   // uncomment to run as alerts are a nuisance

// Loops Exercise 6 Sum( I've changed function name from that in instructions)

function sumAndAverage(myArray){

    let isNumbers=true;
    let sumVal=0;
    const results=[];

     // check for integer array

     for( i=0 ; i< myArray.length; i++){
         if ( typeof myArray[i]!=="number"){
             isNumbers=false;
             return("Error");
         }
    
        }
     
     // if a valid array passed calculate sum and average
     
     if ( isNumbers){
        for( i=0 ; i< myArray.length; i++){
           sumVal+=myArray[i];
        } 

        results[0]=sumVal;           // sum of array elements
        results[1]=(sumVal/myArray.length);
        return( results);
     }
     

}

const testArray=[ 1,2,3,-4,5,6,-7,8,9,10];
let returnedVals=sumAndAverage(testArray);

if(returnedVals!="Error")
{
   console.log(`The sum and average of ${testArray} is ${returnedVals[0]} and ${returnedVals[1]} respectively`);
}
else
{
    console.log("Your array was not a numeric array");
}


// Loops Exercise 2?? Tasks

const tasks=["vacuuming","washing up","kitchen cleaning","bathroom cleaning"];

for( i=0; i<tasks.length; i++){
    console.log(`Task ${i+1}: ${tasks[i]}`);
}
