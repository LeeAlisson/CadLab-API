export const LabSchemaRequest = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Laboratório de Química",
    },
    description: {
      type: "string",
      example: "Laboratório dedicado a aulas e experimentos químicos.",
      nullable: true,
    },
    location: {
      type: "string",
      example: "Bloco B - Sala 201",
    },
    capacity: {
      type: "integer",
      example: 30,
    },
  },
  required: ["name", "location"],
};
