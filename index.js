"use strict"

module.exports = (array) => {
	if (!Array.isArray(array)) throw new TypeError("An array must be provided!")
	const duplicates = []
	array.forEach((value, index, array) => {
		if ((array.indexOf(value) !== index || array.lastIndexOf(value) !== index) && !duplicates.includes(value)) duplicates.push(value)
	})
	return duplicates
}
