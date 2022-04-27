export const resolvers = {
  Query: {
    hello: () => "Maldito ",
    greet: (root, { name, lastname = "Imbecil" }) =>
      `Hola ${name} ${lastname}, hijo de re mil puta`,
  },
};
