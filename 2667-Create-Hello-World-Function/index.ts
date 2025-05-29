/**
 * This function creates a nested function that returns the string "Hello World".
 *
 * @returns A function that, when called, returns the string "Hello World".
 *
 * @example
 * const helloWorld = createHelloWorld();
 * console.log(helloWorld()); // Output: Hello World
 */
function createHelloWorld() {
  return function (): string {
    return "Hello World";
  };
}
