/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding (when you have the 'this' keyword pointing at the window or global scope)
* 2. Implicit Binding (When you call something using dot notation the object to the left of the dot is what the 'this' keyword point at for a reference)
* 3. New keyword Binding (when you have a constructor function, the 'this' keyword gets pointed at the "NEW" object being created by the constructor function)
* 4. Explicit Binding (when you demand the this keyword be attached to a specific object by using the call or apply method on the object in question)
*
* write out a code example of each explanation above
*/

// 1.Global Binding:
console.log(this); //nothing to point at so it targets the console/window

// 2.implicit Binding:
var myRing= {
    design: "Aztec",
    accent: "Black Onyx",
    mainStone: "Larimar",
    size: "US 9.5",
    material: "Silver",
    describe: function(){
        console.log(`My ${this.design} style ${this.mainStone} and ${this.accent} ring is made of ${this.material} and is a size ${this.size} men's ring.`)
    }
}
myRing.describe();  // here the object being referred to is myRing because it is left of the dot notation in this example.


// 3.New Keyword Binding:



// 4.Explicit Binding: can use .call  .apply  .bind  
//.call invokes the functions strung together and passes in any arguments one by one
//.apply also invokes any arguments passed in but allows arrays to be passed in as an agument and the array gets parsed and passed forward to fill any parameters available.
// .bind creates a new function (not invoked) and passes in arguments one by one just like .call

var sayFavFood = function(){                           //function outside of obj
    console.log(`My favorite food is ${this.favFood}`);
}
const sarah={                                           //obj named Sarah
    name:'Sarah',
    age:'24',
    favFood:'Chocolate Chip Cookies!!!!'
}
sayFavFood.call(sarah);                //this basically forces the this keyword on function line 36 to look at obj Sarah and check to see if there is a key called favFood and if so return the value pair which in this case is 'Chocolate Chip Cookies'
