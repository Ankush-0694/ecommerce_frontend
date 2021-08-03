import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

/** Sentry Configuration */

// Sentry.init({
//   dsn: "https://0da05a8e09114e06b270da107e31fd97@o909201.ingest.sentry.io/5844525",
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

import { authLink, errorLink, httplink } from "./ApolloLinks/ApolloLinks";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httplink)),
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
