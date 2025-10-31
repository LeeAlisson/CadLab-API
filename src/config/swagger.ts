import swaggerJSDoc from "swagger-jsdoc";
import { UserSchema } from "../schemas/user.schema";
import { LabSchema } from "../schemas/lab.schema";
import { RoomSchema } from "../schemas/room.schema";
import { BookingSchema } from "../schemas/booking.schema";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CadLab API",
      version: "1.0.0",
      description: "API para gerenciar laboratórios, salas e agendamentos",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: UserSchema,
        Lab: LabSchema,
        Room: RoomSchema,
        Booking: BookingSchema,
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
