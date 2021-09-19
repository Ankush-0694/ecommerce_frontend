import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "apollo-link-error";
import { errorVar } from "../ReactiveVariables/ReactiveVariables";
import { createBrowserHistory } from "history";

/** imported for pushing on error */
const history = createBrowserHistory();

const httplink = createUploadLink({ uri: "http://localhost:4010/graphql" });

/* For handling Errors at Top level */
const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log("dispatch");

      /** There can multiple response error , we may need to map this
       * reactive variable
       */
      if (response) {
        errorVar([response.errors[0].message]);
        console.log(errorVar());
      }
      return message;
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);

    /** removing token if token is not valid */
    if (networkError.message.includes("Unexpected token ")) {
      localStorage.removeItem("token");
      // console.log("push to some Error Page");
      history.push("/NetworkError");
    }
  }
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
