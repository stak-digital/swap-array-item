'use strict';

function buildOption(option) {
	var labelElement = document.createElement('label');
	labelElement.innerHTML = option.innerHTML;
	var input = document.createElement('input');
	input.type = 'checkbox';
	input.value = option.value;
	labelElement.appendChild(input);
	return labelElement;
}

/**
 * @param {HTMLSelectElement} selectElement
 * @param {Function} optionFilter
 */
var index = function (selectElement) {
	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    optionFilter = _ref.optionFilter;

	var options = Array.from(selectElement.children);
	var parsedOptions = !!optionFilter ? options.filter(optionFilter) : options;
	var checkboxGroup = document.createElement('div');
	var inputList = parsedOptions.map(buildOption);
	inputList.forEach(function (input) {
		checkboxGroup.appendChild(input);
	});
	document.body.appendChild(checkboxGroup);
};

module.exports = index;
