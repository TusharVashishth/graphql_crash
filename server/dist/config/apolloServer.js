import { ApolloServer } from "@apollo/server";
import todoSchema from "../module/todo/todoSchema.js";
import todoResolver from "../module/todo/todoResolver.js";
const apolloServer = new ApolloServer({
    typeDefs: todoSchema,
    resolvers: todoResolver,
});
export default apolloServer;
