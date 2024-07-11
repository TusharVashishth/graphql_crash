import express from "express";
import "dotenv/config";
import apolloServer from "./config/apolloServer.js";
const app = express();
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/", (req, res) => {
    return res.json({ status: 200, message: "App is working" });
});
const startApolloServer = async () => {
    await apolloServer.start();
    app.use("/graphql", expressMiddleware(apolloServer));
};
startApolloServer();
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
