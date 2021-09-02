import { makeVar } from "@apollo/client";

/** Will populate using apollo link error (on Error)
 * It will be useful to show alerts addition to the component
 * Like in signup form and login Form , adding to cart
 *
 * it is used in mutation onCompleted callbacks to throw success message
 */
const errorVar = makeVar([]);
// console.log(errorVar());

export { errorVar };
