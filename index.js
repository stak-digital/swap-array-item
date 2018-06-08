'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getHigherValue(valueOne, valueTwo) {
	if (valueOne > valueTwo) {
		return valueOne;
	}

	return valueTwo;
}

function getLowerValue(valueOne, valueTwo) {
	if (valueOne < valueTwo) {
		return valueOne;
	}

	return valueTwo;
}

var index = function (arrayTarget, targetIndexOne, targetIndexTwo) {
	if (targetIndexOne < 0 || targetIndexTwo < 0) {
		throw new RangeError('target indices must not be lower than 0');
	}

	var arrayLength = arrayTarget.length;

	if (targetIndexOne > arrayLength - 1 || targetIndexTwo > arrayLength - 1) {
		throw new RangeError('target indices must not be higher than the length of the array');
	}

	var lowerIndex = getLowerValue(targetIndexOne, targetIndexTwo);
	var higherIndex = getHigherValue(targetIndexOne, targetIndexTwo);

	var startOfArray = arrayTarget.slice(0, lowerIndex);
	var middleOfArray = arrayTarget.slice(lowerIndex + 1, higherIndex);
	var endOfArray = arrayTarget.slice(higherIndex + 1);

	return [].concat(_toConsumableArray(startOfArray), [arrayTarget[higherIndex]], _toConsumableArray(middleOfArray), [arrayTarget[lowerIndex]], _toConsumableArray(endOfArray));
};

module.exports = index;
