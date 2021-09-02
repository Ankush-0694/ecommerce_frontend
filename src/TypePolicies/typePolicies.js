import { offsetLimitPagination } from "@apollo/client/utilities";

// type policy - for offset based pagination
// export const typePolicies = {
//   Query: {
//     fields: {
//       getSomeProducts: offsetLimitPagination(),
//     },
//   },
// };

// type policy - for cursor based pagination
export const typePolicies = {
  Query: {
    fields: {
      getAllProducts: {
        keyArgs: false, // it means cache will not store separate result if we change the arguments

        merge(existing = [], incoming) {
          //   console.log(existing);
          return existing ? [...existing, ...incoming] : incoming;
        },
      },
    },
  },
};
