import { createContext } from "react";

type ApolloPageContext = {
  uri?: string;
};

const apolloPageContext = createContext<ApolloPageContext>({});

export default apolloPageContext;
