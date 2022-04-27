import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";

const root = { hello: () => "Hello world!" };

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello friend!" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
