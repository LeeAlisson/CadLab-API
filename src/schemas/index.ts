import { BookingSchemaRequest } from "./request/bookingRequest.schema";
import { LabSchemaRequest } from "./request/labRequest.schema";
import { RoomSchemaRequest } from "./request/roomRequest.schema";
import { UserSchemaRequest } from "./request/userRequest.schema";

import { BookingSchemaResponse } from "./response/bookingResponse.schema";
import { LabSchemaResponse } from "./response/labResponse.schema";
import { RoomSchemaResponse } from "./response/roomResponse.schema";
import { UserSchemaResponse } from "./response/userResponse.schema";

export const Schemas = {
  UserSchemaRequest,
  LabSchemaRequest,
  RoomSchemaRequest,
  BookingSchemaRequest,
  UserSchemaResponse,
  LabSchemaResponse,
  RoomSchemaResponse,
  BookingSchemaResponse,
};
