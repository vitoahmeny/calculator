(function (window) {
		
var utilities = {};
utilities.by = function (list, n, callback) {
	for (var i = 1; i < list.length; i+=n) {
		callback(list[i]);
	}
};

utilities.keys =function (obj) {
	var arr = [];
	for (var key in obj) {
		arr.push(key);
	}
	return arr;
};

utilities.values = function (obj) {
	var arr = [];
	for (var key in obj) {
		arr.push(obj[key]);
	}
	return arr;
};

utilities.pairs = function (obj) {
	var arr = [];
	var keyArr = utilities.keys(obj);
	var valueArr = utilities.values(obj);
	for (var i = 0; i < keyArr.length; i++) {
		arr.push(keyArr[i]);
		arr.push(values[i]);
	}
	return arr;
};

utilities.shuffle = function (arr) {
	var newArr = [];
	var arrayLength = arr.length;
	for (var i = 0; i < arrayLength; i++) {
        var index = Math.floor(Math.random() * arr.length) ;
		var value = arr[index];
		newArr.push(value);
		arr.splice(arr.indexOf(value), 1);
	}
	return newArr;

};

utilities.pluralize = function (n, word, pluralWord) {
	if (n === 1) {
		return word;
	}
	else if (n !== 1 && !pluralWord) {
		return word + "s";
	}
	else if (n !== 1 && pluralWord) {
		return pluralWord;
	}
};

utilities.toDash = function (str) {
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i].toUpperCase() === str[i]){
			arr.push("-" + str[i].toLowerCase());
		}
		else arr.push(str[i]);
	}
	return arr.join("");
};

utilities.toCamel = function (str) {
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "-") {
			arr.push(str[i + 1].toUpperCase());
			i++;
		}
		else arr.push(str[i]);
	}
	return arr.join("");
};

utilities.has = function (obj, search) {
	var arr = [];
	for(var key in obj){
		if (obj[key] === search) {
			arr.push(true);
		}
		else arr.push(false);
	}
	return arr.indexOf(true) !== -1;
};


utilities.pick = function (obj, keys) {
	var obj2 = {};
	for(var key in obj) {
		if (keys.indexOf(key) != -1) {
			obj2[key] = obj[key];
		}
	}
	return obj2;
};


var data = {

 type: "transformer",

 index: 19,

 siblings: 19,

 access: "full"

};

window.utilities = utilities;

})(window);