export const BookingSchemaRequest = {
  type: "object",
  properties: {
    roomId: {
      type: "integer",
      example: 3,
      description: "ID da sala vinculada ao agendamento",
    },
    userId: {
      type: "integer",
      example: 7,
      description: "ID do usuário que realizou o agendamento",
    },
    labId: {
      type: "integer",
      example: 2,
      description: "ID do laboratório associado ao agendamento",
    },
    startTime: {
      type: "string",
      format: "date-time",
      example: "2025-11-05T08:00:00Z",
      description: "Data e hora de início do agendamento (UTC)",
    },
    endTime: {
      type: "string",
      format: "date-time",
      example: "2025-11-05T10:00:00Z",
      description: "Data e hora de término do agendamento (UTC)",
    },
    purpose: {
      type: "string",
      nullable: true,
      example: "Aula prática de biologia molecular",
      description: "Motivo ou finalidade do agendamento (opcional)",
    },
    description: {
      type: "string",
      nullable: true,
      example: "Trazer equipamentos especiais para a aula",
      description: "Descrição adicional do agendamento (opcional)",
    },
    status: {
      type: "string",
      enum: ["confirmed", "pending", "cancelled"],
      example: "confirmed",
      description:
        "Status do agendamento, podendo ser 'confirmed', 'pending' ou 'cancelled'",
    },
  },
  required: ["roomId", "userId", "labId", "startTime", "endTime"],
};
