export const UserSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
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
    bookings: {
      type: "array",
      description: "Lista de agendamentos associados ao usuário",
      items: {
        $ref: "#/components/schemas/Booking",
      },
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T22:00:00Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T22:30:00Z",
    },
  },
  required: ["name", "email", "password"],
};
