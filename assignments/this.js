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
    this.name = obj.name;
    this.property2 = obj.property2;
    this.method1 = function() {
        console.log(`The following object is shown through an example of ${this.name} Binding`, this);
    }
}
const newBingingObject = new Binding({name: "New", property2: "new's Variable 2"});
newBingingObject.method1();

// Principle 4
// code example for Explicit Binding
function explicitBinging(obj) {
    Binding.call(this, obj); // new binding
    this.property3 = obj.property3;
    this.property4 = obj.property4;
}

const explicitBingingObject = new explicitBinging({
    name: 'Explicit',
    property2: 'explicit string 2',
    property3: 'explicit string 3',
    property4: 'explicit string 4'
});

explicitBingingObject.method1(); // calling method of object that was created from a constructor that used call