/**
 * @description Defines two nested functions, both named `do_or_do_not`, but the inner
 * function is defined after the outer function, which is a syntax error in JavaScript.
 *
 * @returns {boolean} `false`.
 */
function f() {
  // abc

  // def

  let x = null;

  /**
   * @description Returns a boolean value indicating failure, effectively implying a
   * "do not" action.
   *
   * @returns {boolean} False.
   */
  function do_or_do_not() {
    // I give up
    return false;
  }

  /**
   * replace me
   */
  function do_or_do_not() {
      // abc
      
      // def
      
      let x = null;
      // I give up
      return false;
  }
}
