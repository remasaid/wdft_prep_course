/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for (var counter = 1; counter <= 100; counter +=1 ) {
    console.log(counter);
};


/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


for (var counter = 1; counter < 8; counter +=1 ) {
    if(counter === 1)
        console.log('#'); 
    else if (counter === 2)
        console.log('##');
    else if (counter === 3)
        console.log('###');
    else if (counter === 4)
        console.log('####');
    else if (counter === 5)
        console.log('#####');
    else if (counter === 6)
        console.log('######');
    else 
        console.log('#######');
  
   
};

/**Trying to find another way to do it with less code */
var a = '';

for (var i = 1; i <= 28; i += 1) {
    if (i == 1 || i ==3 ||i == 6 || i == 10 ||i == 15 || i ==21 || i ==28) {
        a+= '#\n';
    } else {
        a += '#';
    }
}
console.log(a);