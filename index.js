"use strict"

module.exports = (array) => {
	if (!Array.isArray(array)) {
		throw new TypeError("An array must be provided!")
	}

	return array.filter((value, index) => array.indexOf(value) === index && array.lastIndexOf(value) !== index)
}
