import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createTheme, ThemeProvider } from '@mui/material/styles';
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

import {
  authLink,
  errorLink,
  httplink,
} from "./helpers/ApolloLinks/ApolloLinks";
import { typePolicies } from "./helpers/TypePolicies/typePolicies";

const cache = new InMemoryCache({
  typePolicies: { ...typePolicies },
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httplink)),
  cache,
});

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(2, 62, 138)'
    },
    secondary: {
      main: '#f50057'
    }, 
    
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
