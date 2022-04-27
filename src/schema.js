import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";

// El signo de exclamación indica que la propiedad debe ser obligatoria
const typeDefs = `
type Query {
    hello: String
    greet(name: String!, lastname: String): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
