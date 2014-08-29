array.js: Useful set of javascript array methods.
========

array.js offers useful javascript array methods like:

``` javascript
[1,2,3,4].subtract([2,3,5]); //returns [1,4]
[1,2,3,4].intersect([2,3,5]); //returns [2,3]
[1,2,3,4].exclusion([2,3,5]); //returns [1,4,5]
```

and array methods support for old browsers:

``` javascript
filter, forEach, map, some, every, isArray, indexOf, lastIndexOf, 
```

***

## How to use it
Just add 

``` html
<script type="text/javascript" src="array.js"></script>
```

Include this line if you want support for old browsers
``` html
<script type="text/javascript" src="oldBrowsersSupport.js"></script>
```
and you'll be able to safely use array methods

## Documentation

### Set methods

_**subtract:**_
```
a,b: arrays
func: a comparision function. Takes one element of array a and one element of array b. Returns true if a and b are equals

a.subtract(b, func)
Returns elements of array a not contained in array b. 
If func it's not provided uses == for elements comparision
```


_**intersect:**_
```
a,b: arrays
func: a comparision function. Takes one element of array a and one element of array b. Returns true if a and b are equals

a.intersect(b, func)
Returns common elements between array a and array b. 
If func it's not provided uses == for elements comparision
```


_**exclusion:**_
```
a,b: arrays
func: a comparision function. Takes one element of array a and one element of array b. Returns true if a and b are equals

a.exclusion(b, func)
Returns not common elements between array a and array b. 
If func it's not provided uses == for elements comparision
```

### Native array methods
You can find good documentation about native array methods at [mozilla developer page](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/prototype) or at 
[ECMAScript page](http://es5.github.io/#x15.4)

## License

array.js is released under the [MIT License](http://opensource.org/licenses/MIT).
