export const RoomSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 10,
    },
    name: {
      type: "string",
      example: "Sala 3",
    },
    capacity: {
      type: "integer",
      example: 25,
    },
    description: {
      type: "string",
      example: "Sala equipada com projetor e quadro branco",
      nullable: true,
    },
    lab: {
      type: "object",
      description: "Laboratório ao qual a sala pertence",
      $ref: "#/components/schemas/Lab",
    },
    labId: {
      type: "integer",
      example: 1,
      description: "ID do laboratório ao qual a sala pertence",
    },
    bookings: {
      type: "array",
      description: "Lista de reservas associadas à sala",
      items: {
        $ref: "#/components/schemas/Booking",
      },
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T10:05:00Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2025-10-29T11:30:00Z",
    },
  },
  required: ["name", "capacity", "labId"],
};
