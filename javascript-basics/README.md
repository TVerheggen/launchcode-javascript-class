#Javascript Basics

In this exercise, we'll use JS objects and prototypes, play with the Document Object Model (DOM), and get used to some functional patterns in JS.

## Getting Ready
Complete the [Functional Javascript workshopper](http://nodeschool.io/#workshoppers) exercises, at least through number 8 ("Basic: Call").

Optionally, you may also find it useful to complete the [Planet Proto workshopper](http://nodeschool.io/#workshoppers).

## What to do
We're going to extend the Array.prototype object to add some new funcionality, as well as endowing the DOM with some new tools. In the below items, you should never find it necessary to use a loop, but instead should rely on Array.prototype methods such as `.forEach`, `.filter`, `.some` and so on.

### Adding functionality to Array.prototype

Place your code for these items in a file named `Array.prototype-extensions.js` in the `js` directory. You may test in any number of ways, including temporarily adding tests to your file and running them at the command line using node, or by building a test HTML file.

1. To get warmed up, let's implement a non-mutating array sort method. [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) mutates the given array. Let's create a new method on Array.prototype (so it will be available to all array objects) called `order` that returns a sorted *copy* of an array (hint: first clone the array, and then call the built-in sort method). It should have the same sytnax as `sort`: `arr.order([compareFunction])`.
2. [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) is an experimental feature of JS (part of the ECMASript 7 proposal and not supported by most browsers). Let's create a [polyfill](http://en.wikipedia.org/wiki/Polyfill) that provides this functionality. You may noticed that there's a polyfill in the above-linked reference, but you should obviously build your own. It need not conform to the exact same edge-case behaviors, or use the same approach, but it should reasonably handle empty arrays and non-array input.
3. Similarly, [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) isn't well supported (it's part of the ECMAScript 6 proposal). Implement this method too, using the same outlined behavior at the above reference.
4. Let's also implement an Array.prototype.findAll method, which should work similarly to `Array.prototype.find` but return an array of values.
5. Finally, let's make our code future-proof. When these specs are implemented, we won't want our code to override the browser implementations, so add checks before each method definition to ensure that if the method already exists, we're not overriding it.

### Creating some DOM utilities

Place your code for these items in a file named `dom-utils.js` in the `js` directory. There is a file named `test.html` that you can use to test your code, and may modify as you like.

For each of these, we'll be implementing some utility methods to do varios things with the DOM. In your file, create an object literal named `DOMUtils` (this can live in the global namespace) to add the methods to. This will effectively namespace our methods.

1. Implement `DOMUtils.flattenDOM([node])`, which should return an array containing each node below the given node (including `node` itself), and should default to `document` if `node` is not provided.
2. Impelement `DOMUtils.getIds([node])`, which should return an array of unique strings corresponding to all DOM node IDs attached to nodes below `node` (again, this should be inclusive of `node`, with `node` defaulting to `document` if not provided).
3. Implement `DOMUtils.getClasses([node])`, which should return an array of unique strings corresponding to the values of all `class` attributes attached to nodes below `node` (inclusive of `node`, with `node` defaulting to `document` if not provided).
4. Bonus: Make 2 and 3 "live" methods, such that the returned array has elements added and removed as the DOM changes.

## References
* [Prototypla Inheritance in Javascript (Douglas Crockford)](http://javascript.crockford.com/prototypal.html)
* [Javascript Inheritance Patterns (David Shariff)](http://davidshariff.com/blog/javascript-inheritance-patterns/)
* [Array reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Clone Arrays with Javascript](http://davidwalsh.name/javascript-clone-array)
* [`throw` reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)