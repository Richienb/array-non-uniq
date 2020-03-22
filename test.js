const test = require("ava")
const arrayNonUniq = require(".")

test("main", (t) => {
	t.deepEqual(arrayNonUniq([1, 2, 2, 3, 1, 4, 2, 4]), [1, 2, 4])
	t.deepEqual(arrayNonUniq(["a", "a", "b", "a", "c", "a", "d"]), ["a"])
})
