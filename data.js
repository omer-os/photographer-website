import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clb3bccex0fr601t7cqw8gmvi/master",
  cache: new InMemoryCache(),
});

export default client;