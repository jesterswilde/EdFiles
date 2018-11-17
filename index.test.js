const { forEach, map, reduce } = require("./index");

describe("forEach", () => {
  it("should invoke the callback on each element in an array, and pass it the value, and then the index", () => {
    const array = ["foo", "bar", "baz"];
    const cb = jest.fn();

    forEach(array, cb);

    expect(cb).toHaveBeenCalledWith("foo", 0);
    expect(cb).toHaveBeenCalledWith("bar", 1);
    expect(cb).toHaveBeenCalledWith("baz", 2);
  });

  it("Should work with objects as well, and pass them the key", () => {
    const obj = { foo: "bar", test: "this", other: "thing" };
    const cb = jest.fn();

    forEach(obj, cb);

    expect(cb).toHaveBeenCalledWith("bar", "foo");
    expect(cb).toHaveBeenCalledWith("this", "test");
    expect(cb).toHaveBeenCalledWith("thing", "other");
  });
});

describe("map", () => {
  it("should apply the callback to each element in the collection, and return the result in a new array", () => {
    const array = [1, 3, 5];
    const mockForEach = jest.fn((...args) => forEach(...args));

    const result = map(array, (a, b) => a * b, { _forEach: mockForEach });

    expect(result).toEqual([0, 3, 10]);
    expect(mockForEach).toHaveBeenCalled();
  });
  it("should not mutate the original array", () => {
    const array = [1, 2, 3];

    result = map(array, a => a + 3);

    expect(array).toEqual([1, 2, 3]);
  });
  it("should work woth objects as well", () => {
    const obj = { foo: 5, bar: 0, baz: 10 };

    result = map(obj, a => a * 3);

    expect(result).toEqual({ foo: 15, bar: 0, baz: 30 });
  });
});

describe("reduce", () => {
  it("should create an aggregate of an array, by using the callback", () => {
    const array = [1, 2, 3];
    const mockForEach = jest.fn((...args) => forEach(...args));

    const result = reduce(array, (a, b) => a + b, undefined, {
      _forEach: mockForEach
    });

    expect(mockForEach).toHaveBeenCalled();
    expect(result).toEqual(6);
  });
  it("should work on objects and accept an initial value", () => {
    const obj = { a: 0, b: 10, c: 4 };

    const result = reduce(
      obj,
      ({ bigKey, bigValue }, current, key) => {
        if (current > bigValue) return { bigKey: key, bigValue: current };
        return { bigKey, bigValue };
      },
      { bigKey: "none", bigValue: Number.NEGATIVE_INFINITY }
    );

    expect(result).toEqual({ bigKey: 'b', bigValue: 10 });
  });
});
