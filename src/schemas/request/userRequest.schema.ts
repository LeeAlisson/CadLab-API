export const UserSchemaRequest = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "John Doe",
    },
    email: {
      type: "string",
      example: "john.doe@example.com",
    },
    password: {
      type: "string",
      example: "$2b$10$...",
    },
  },
  required: ["name", "email", "password"],
};
