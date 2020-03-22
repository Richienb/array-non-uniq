/**
 * Get the non-unique items in an array.
 * @param array The array to process.
 * @example
 * ```
 * const arrayNonUniq = require("array-non-uniq");
 *
 * arrayUniq([1, 1, 2, 3, 3]);
 * //=> [1, 3]
 *
 * arrayUniq(["foo", "foo", "bar", "foo"]);
 * //=> ['foo']
 * ```
*/
declare function arrayNonUniq<ValueType>(
	array: ReadonlyArray<ValueType>
): ValueType[]

export = arrayNonUniq
