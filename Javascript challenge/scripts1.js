/**Excercise 1 - Fizz Buzz Challenge */

for (var i = 1; i <=100; i += 1){
   
    if (i % 5 == 0 && i % 3 == 0){
        console.log('fizzbuzz');

    }else if (i % 3 == 0) {
        console.log('buzz');

    }else if (i % 5 == 0){
        console.log('fizz');

    }else
     console.log(i);
};
    /**Excercise 2 */

    for (var i = 1; i <=8; i +=1) {
        if (i % 2 != 0){
            console.log("#  #  #  #");
        } else {
            console.log("  #  #  #  #");
        }
    }
var a = "";

for (var i = 1; i <=32; i +=1) {
    if (i % 8 == 0) {
      a += "#\n";
    
  
    } else if (i % 4 == 0) {
        a += "#\n  ";

    }
     else {
      a += "#  ";
    }

}
 console.log(a);