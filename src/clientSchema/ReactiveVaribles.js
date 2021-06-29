import { makeVar } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const isLoggedInVar = makeVar(!!localStorage.getItem("token"));

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
      },
    },
  },
});

// Initializes to an empty array
// export const cartItemsVar = makeVar([]);
