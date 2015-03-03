/*
*
* array.js
* https: //github.com/ferrod20/array.js
*
* Useful javascript array methods
*
* This software is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY
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

if (!Array.prototype.remove) {
    Array.prototype.remove = function (element) {
        var index = this.indexOf(element);
        if (index !== -1)
            this.splice(index, 1);
    };
};

if (!Array.prototype.contains) {
    Array.prototype.contains = function (element) {
        return this.indexOf(element) > -1;        
    };
};

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];        
    };
};

if (!Array.prototype.find) {
    Array.prototype.find = function (fun) {
    	var filtered = this.filter(fun);
        return filtered.length ? filtered[0] : null;
    };
};
