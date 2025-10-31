export const LabSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 1,
    },
    name: {
      type: "string",
      example: "Laboratório de Química",
    },
    description: {
      type: "string",
      example: "Laboratório dedicado a aulas e experimentos químicos.",
    },
    location: {
      type: "string",
      example: "Bloco B - Sala 201",
    },
    capacity: {
      type: "integer",
      example: 30,
    },
    rooms: {
      type: "array",
      description: "Lista de salas associadas ao laboratório",
      items: {
        $ref: "#/components/schemas/Room",
      },
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T10:00:00Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T12:00:00Z",
    },
  },
  required: ["name", "location"],
};
