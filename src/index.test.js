import expect from 'expect';
import swapArrayItems from './index';

describe('swapArrayItems', () => {
	const testArray = [1, 2, 3, 4, 5];

	it('should return the correct array configuration when given a start index lower than the end', () => {
		expect(swapArrayItems(
			testArray, 0, 3
		)).toEqual(
			[4, 2, 3, 1, 5]
		);

		expect(swapArrayItems(
			testArray, 0, 4
		)).toEqual(
			[5, 2, 3, 4, 1]
		);

		expect(swapArrayItems(
			testArray, 2, 3
		)).toEqual(
			[1, 2, 4, 3, 5]
		);

		expect(swapArrayItems(
			testArray, 1, 3
		)).toEqual(
			[1, 4, 3, 2, 5]
		);
	});

	it('should return the correct array configuration when given a start index higher than the end', () => {
		expect(swapArrayItems(
			testArray, 3, 0
		)).toEqual(
			[4, 2, 3, 1, 5]
		);

		expect(swapArrayItems(
			testArray, 4, 0
		)).toEqual(
			[5, 2, 3, 4, 1]
		);

		expect(swapArrayItems(
			testArray, 3, 2
		)).toEqual(
			[1, 2, 4, 3, 5]
		);

		expect(swapArrayItems(
			testArray, 3, 1
		)).toEqual(
			[1, 4, 3, 2, 5]
		);
	});

	it('should throw an error when an index is below 0', () => {

		expect(() => {
			swapArrayItems(testArray, -1, 1);
		}).toThrow();

		expect(() => {
			swapArrayItems(testArray, 1, -1);
		}).toThrow();

	});

	it('should throw an error when an index is higher than the array length', () => {
		expect(() => {
			swapArrayItems(testArray, 1, 5);
		}).toThrow();

		expect(() => {
			swapArrayItems(testArray, 5, 1);
		}).toThrow();
	});
});