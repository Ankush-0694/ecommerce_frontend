import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "apollo-link-error";
import { errorVar } from "../ReactiveVariables/ReactiveVariables";

const httplink = createUploadLink({ uri: "http://localhost:4010/graphql" });

/* For handling Errors at Top level */
const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      if (message.includes("not authenticated")) {
        // Logout User
        console.log("hello not auth");
      } else {
        console.log("dispatch");

        /** There can multiple response error , we may need to map this
         * reactive variable
         */
        if (response) {
          errorVar([response.errors[0].message]);
          console.log(errorVar());
        }
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

/* For passing token  in the header for every request */
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export { httplink, authLink, errorLink };
