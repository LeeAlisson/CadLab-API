export const RoomSchemaRequest = {
  type: "object",
  properties: {
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
    labId: {
      type: "integer",
      example: 1,
      description: "ID do laboratório ao qual a sala pertence",
    },
  },
  required: ["name", "capacity", "labId"],
};
