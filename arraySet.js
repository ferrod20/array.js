/*
*
* arraySet.js
* https: //github.com/ferrod20/array.js
*
* Set methods for array
*
* version: 0.1 (alpha)
* Created by Fernando Rodriguez
*
*/

if (!Array.prototype.subtract) {
    Array.prototype.subtract = function (arr, fun) {
        return this.filter(function (elem) {
            return !arr.some(function (el) {
                return fun? fun(elem, el): elem == el;
            });
        });
    };
};

if (!Array.prototype.intersect) {
    Array.prototype.intersect = function (arr, fun) {
        return this.filter(function (elem) {
            return arr.some(function (el) {
                return fun? fun(elem, el): elem == el;
            });
        });
    };
};

if (!Array.prototype.exclusion) {
	Array.prototype.exclusion=function(arr, fun){ 
		return this.subtract(arr, fun).concat(arr.subtract(this, fun));
    };
};