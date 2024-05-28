/**
 * @description Has two inner functions, `do_or_do_not`, which both return `false`.
 * The outer function `do_or_do_not` sets a variable `x` to `null` before calling the
 * inner functions.
 * 
 * @returns { boolean } `false`.
 */
function f() {
  // abc

  // def

  let x = null;

  /**
   * @description Evaluates to `false`.
   * 
   * @returns { boolean } `false`.
   */
  function do_or_do_not() {
    // I give up
    return false;
  }

  /**
   * @description Is a void function that returns false when an attempt to evaluate its
   * body results in an error or null reference.
   * 
   * @returns { false } `false`.
   * 
   * 		- `x`: A null value is returned when the function reaches the final statement
   * "I give up". This indicates that the function was unable to complete its execution
   * successfully.
   * 		- `false`: The returned value is `false`, indicating that the function did not
   * execute successfully.
   */
  function do_or_do_not() {
      // abc
      
      // def
      
      let x = null;
      // I give up
      return false;
  }
}
