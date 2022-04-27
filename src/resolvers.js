export const resolvers = {
  Query: {
    hello: () => "Hello World! ",
    greet: (root, { name, lastname = "" }) =>
      `Hello ${name}${lastname ? " " + lastname : ""}, How are you?`,
  },
};
