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

export default function(arrayTarget, targetIndexOne, targetIndexTwo) {
	if (targetIndexOne < 0 || targetIndexTwo < 0) {
		throw new RangeError('target indices must not be lower than 0');
	}

	const arrayLength = arrayTarget.length;

	if (targetIndexOne > arrayLength - 1 || targetIndexTwo > arrayLength - 1) {
		throw new RangeError('target indices must not be higher than the length of the array')
	}

	const lowerIndex = getLowerValue(targetIndexOne, targetIndexTwo);
	const higherIndex = getHigherValue(targetIndexOne, targetIndexTwo);

	const startOfArray = arrayTarget.slice(0, lowerIndex);
	const middleOfArray = arrayTarget.slice(lowerIndex + 1, higherIndex);
	const endOfArray = arrayTarget.slice(higherIndex + 1);

	return [
		...startOfArray,
		arrayTarget[higherIndex],
		...middleOfArray,
		arrayTarget[lowerIndex],
		...endOfArray
	];
}