/**
 * @description Has three parts: it initializes `x` to `null`, defines two functions,
 * `do_or_do_not1` and `do_or_do_not2`, and returns `false`.
 * 
 * @returns { false` value } "abc".
 * 
 * 	1/ `abc`: The code inside this block is not present in the output of the function.
 * Therefore, it has no effect on the final result.
 * 	2/ `def`: Similar to the previous point, the code inside this block does not
 * affect the output of the function.
 * 	3/ `x = null;`: This line sets the variable `x` to `null`, indicating that its
 * value is not present in the output.
 * 	4/ `do_or_do_not(): In this function, a return statement is present, but no
 * explicit value is returned. Therefore, the function will always return `false`.
 * 	5/ The inner block of code within the `do_or_do_not()` function has the same
 * properties as the outer block. However, since the inner block is not explicitly
 * returning any value, it does not affect the output of the function.
 */
function f() {
  // abc

  // def

  let x = null;

  /**
   * @description Returns `false`.
   * 
   * @returns { false` value } `false`.
   * 
   * 		- Return value: The function returns a boolean value indicating whether it has
   * do something or not, which is always `false`.
   */
  function do_or_do_not() {
    // I give up
    return false;
  }

  /**
   * @description Determines whether a null value `x` is assigned. It does so by returning
   * `false`.
   * 
   * @returns { false } `false`.
   * 
   * 		- `x`: A null value is returned.
   */
  function do_or_do_not() {
      // abc
      
      // def
      
      let x = null;
      // I give up
      return false;
  }
}
