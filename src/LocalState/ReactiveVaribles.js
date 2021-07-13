import { makeVar } from "@apollo/client";

export const cartItemsVar = makeVar([]);

/**
 * cache policy is used specify a fields which can be directly fetch using cache(using @client query)
 */
// {
// {
//   typePolicies: {
//     Query: {
//       fields: {
//         cartData: {
//           read(name = "UNKNOWN NAME") {
//             return name;
//           },
//         },
//       },
//     },
//   },
// }
