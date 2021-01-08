/* golbal console, alert, prompt*/

/*
var x = 1; 

function testFunc(){

    "use strict";

    var calc = x + 2;
    console.log(calc)
}
testFunc();

*/
/*
//var x = 1; 

function testFunc(){

    "use strict";

    var calc = x + 2; // 3
    console.log(calc)
}
testFunc();
*/
/*
var x = 1;

function testFunc() {

    "use strict";

    var x = 5,

        calc = x + 2;

    console.log(calc)
}
testFunc();
*/
/*
var x = 1;

function testFunc() {

    "use strict";

    var x = 5,

        calc = x + 2;

    console.log(calc)
}
testFunc();

console.log(x + 2);
*/
/*
var x = 1;

function testFunc() {

    "use strict";

    var x = 5,

        calc = x + 2; // 5 + 2 = 7

    console.log(calc)
}
testFunc();

console.log(x + 2);// 1 + 2 = 3
*/

/*
var x = 1;

function testFunc() {

    "use strict";

    x = 5;

        var calc = x + 2;

    console.log(calc)
}
testFunc();

console.log(x + 2);
*/
/*
var x = 1;

function testFunc() {

    "use strict";

    var x = 5;

    function testChild() {

        var calc = x + 2;
    }
    console.log(calc)
    }
    testFunc();

    console.log(x + 2);
    */

   var x = 1;

   function testFunc() {
   
       "use strict";
   
       var x = 5;
   
       function testChild() {
   
           var calc = x + 2;

           console.log(calc)

       }
       return testChild();
       }
       testFunc();
   
       console.log(x + 2);