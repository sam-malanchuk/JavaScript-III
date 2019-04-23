/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding is when you use the 'this' keyword outside any scope(global scope) so it targets the window or console object.
* 2. Implicit Binding is when a method being called, the this would apply to the object on the left of the dots
* 3. New Binding is when a constructor function is being used and 'this' would target the specific object instance it's used on(at the time of invoke).
* 4. Explicit Binging is when a call, apply, or bind method is used in JavaScipt.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(`The following object is shown through an example of Window Binding`, this);

// Principle 2
// code example for Implicit Binding
const implicitBinding = {
    property: "Test 1",
    thisMethod: function() {
        console.log(`The following object is shown through an example of Implicit Binding`, this);
    }
};
implicitBinding.thisMethod();

// Principle 3
// code example for New Binding
function Binding(obj) {
    this.property1 = obj.property1;
    this.property2 = obj.property2;
    this.method1 = function(type) {
        console.log(`The following object is shown through an example of ${type} Binding`, this);
    }
}
const newBingingExample = new Binding({property1: "new's Variable 1", property2: "new's Variable 2"});
newBingingExample.method1('New');

// Principle 4
// code example for Explicit Binding
const explicitBingingExample = new Binding({property1: "explicit's Variable 1", property2: "explicit's Variable 2"});

newBingingExample.method1.call(explicitBingingExample);