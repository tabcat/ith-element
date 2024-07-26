export class IndexNotDefinedError extends Error {
  public override name: 'IndexNotDefinedError'

  constructor (...args: any) {
    super(...args)
    this.name = 'IndexNotDefinedError'
  }
}

/**
 * Returns the element at index `i` in the `array`. Throws if the index is not defined.
 *
 * @param array
 * @param i
 * @returns
 */
export const ithElement = <T>(array: T[]) => (i: number): T => {
  // `in` operator used to support arrays elements which are null or undefined
  if (i in array) {
    return array[i]!; // if `i` in `array` with type T[] then `array[i]` has type T
  }

  throw new IndexNotDefinedError(
    `Unable to access element at index ${i}. No element is defined at that index.`,
  );
};

/**
 * Returns the first element of the `array`.
 *
 * @param array
 * @returns
 */
export const firstElement = <T>(array: T[]): T => ithElement(array)(0);

/**
 * Returns the last element of the `array`.
 *
 * @param array
 * @returns
 */
export const lastElement = <T>(array: T[]): T =>
  ithElement(array)(Math.max(0, array.length - 1));
