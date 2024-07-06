import { CodeError } from "code-err";
import { describe, expect, it } from "vitest";
import {
  ARRAY_INDEX_NOT_DEFINED,
  firstElement,
  ithElement,
  lastElement,
} from "./index.js";

const array: (number | undefined)[] = [1, undefined, 3];

describe("ithElement", () => {
  it("accesses the ith element of the array", () => {
    expect(ithElement(array)(0)).to.equal(1);
  });

  it("supports accessing undefined elements", () => {
    expect(ithElement(array)(1)).to.equal(undefined);
  });

  it("throws if the index to be accessed is not defined", () => {
    expect(() => ithElement(array)(3))
      .to.throw()
      .and.satisfy((e: CodeError) => e.code === ARRAY_INDEX_NOT_DEFINED);
  });
});

describe("firstElement", () => {
  it("accesses the first element of the array", () => {
    expect(firstElement(array)).to.equal(1);
  });

  it("throws if the array is empty", () => {
    expect(() => firstElement([]))
      .to.throw()
      .and.satisfy((e: CodeError) => e.code === ARRAY_INDEX_NOT_DEFINED);
  });
});

describe("lastElement", () => {
  it("accesses the last element of the array", () => {
    expect(lastElement(array)).to.equal(3);
  });

  it("throws if the array is empty", () => {
    expect(() => lastElement([]))
      .to.throw()
      .and.satisfy((e: CodeError) => e.code === ARRAY_INDEX_NOT_DEFINED);
  });
});
