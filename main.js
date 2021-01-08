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
/*
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
       */
/*
      var x = 1;

      function testParent() {
      
          "use strict";
      
          var x = 5;
      
          function testChild() {
      
              var calc = x + 2;
   
              console.log(calc)
   
          }
          return testChild();
          }
          testParent();
      
          console.log(x + 2);

*/
/*
var x = 1;

function testParent() {

    "use strict";

    var x = 5;

    function testChild() {

        var calc = x + 2;

        console.log(calc)

    }
    console.log(calc)

    return testChild();
    }
    testParent();

    console.log(x + 2);
    */
/*
var x = 1;

function testParent() {

    "use strict";

    var x = 5;

    function testChild() {
        var x = 100,

            calc = x + 2;

        console.log(calc);

    }

    return testChild();
}

testParent();

console.log(x + 2);
*/
/*
var x = 1;

// scope A
// x Is Accessed From Everywhere

function testParent() {

    // Scope B
    // x Is Accessed From Scope B


    "use strict";

    var x = 5;

    function testChild() {

        // scope C

            // x Is Accessed From Scope c

        var x = 100,

            calc = x + 2;

        console.log(calc);

    }

    return testChild();
}

testParent();

console.log(x + 2);
*/


/*
var x = 1;

// scope A
// x Is Accessed From Everywhere

function testParent() {

    // Scope B
    // x Is Accessed From Scope B


    "use strict";

    var x = 5;

    function testChild() {

        // scope C

        // x Is Accessed From Scope c

        var x = 100,

            calc = x + 2;

        console.log(calc);

    }
    console.log(x);

    return testChild();
}

testParent();

console.log(x + 2);

*/
/*
var x = 1;
// scope A
// x Is Accessed From Everywhere
function testParent() {

    // Scope B
    "use strict";

    var x = 5;
    function testChild() {
        // scope C

        var calc = x + 2;
        console.log(calc);
        console.log(x);
    }
    console.log(x);
    return testChild();
}
testParent();
console.log(x + 2);
*/
/*
function testParent() {

    "use strict";

    function testChild(){
        function testGrand() {

            var myName= "Abdallah";
        }
    }
}
testParnet()
*/

function testParent() {
    "use strict";

    var myName = "Abdallah";
    console.log(myName);

    function testChild() {
        console.log(myName);

        function testGrand() {
            console.log(myName);

        }
    }
}
testParnet()