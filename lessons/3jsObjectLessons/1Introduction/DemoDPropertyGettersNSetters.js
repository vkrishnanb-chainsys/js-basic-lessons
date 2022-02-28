﻿// Properties defined by getters and setters are sometimes known as accessor
// properties to distinguish them from data properties 
// that have a simple value.
var o = {
    // An ordinary data property
    x: 0,
    // An accessor property defined as a pair of functions
    get data() { return this.x; },
    set data(value) { this.x = value; }
};
//no colon is used to separate the name of the property from the functions
//that access that property,
//but that a comma is still required after the function body to separate the
//method from the next method or data property

// Note the use of the keyword this in the getters and setter above.
// JavaScript invokes these functions as methods of the object
// on which they are defined,
// which means that within the body of the function "this" refers to 
// the o object. So the getter method for
// the data property can refer to the x property as this.x.

//Accessor properties are inherited,
//just as data properties are, so you can use the object o
//defined above as a prototype for other objects.
//You can give the new objects their own properties,
//and they’ll inherit the properties from the parent as well

var p = {
    // An ordinary data property
    data_y: 0,
    // An accessor property defined as a pair of functions
    get y() { return this.data_y; },
    set y(value) { this.data_y = value; }
};

// This object generates strictly increasing serial numbers
var serialnum = {
    // This data property holds the next serial number.
    // The $ in the property name hints that it is a private property.
    $n: 0,
    // Return the current value and increment it
    get next() { return this.$n++; },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw "serial number can only be set to a larger value";
    }
};
