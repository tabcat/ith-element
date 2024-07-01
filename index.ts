import { CodeError } from "code-err";

/**
 * Error code thrown by ithElement if the index being accessed is not defined.
 */
export const ARRAY_INDEX_NOT_DEFINED = "ARRAY_INDEX_NOT_DEFINED";

/**
 * Returns the element at index `i` in the `array`. Throws if the index is not defined.
 *
 * @param array
 * @param i
 * @returns
 */
export const ithElement = <T>(array: T[], i: number): T => {
  if (i in array === false) { // `in` operator used to support arrays elements which are null or undefined
    throw new CodeError(
      `Unable to access element at index ${i}. No element is defined at that index.`,
      { code: ARRAY_INDEX_NOT_DEFINED },
    );
  }

  return array[i]!; // the index has been checked as defined
};

/**
 * Returns the first element of the `array`.
 *
 * @param array
 * @returns
 */
export const firstElement = <T>(array: T[]): T => ithElement(array, 0);

/**
 * Returns the last element of the `array`.
 *
 * @param array
 * @returns
 */
export const lastElement = <T>(array: T[]): T =>
  ithElement(array, Math.max(0, array.length - 1));
