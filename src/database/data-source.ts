import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../models/User";
import { Lab } from "../models/Lab";
import { Room } from "../models/Room";
import { Booking } from "../models/Booking";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, 
  synchronize: false,
  logging: true,
  entities: [User, Lab, Room, Booking],
  ssl: {
    rejectUnauthorized: false
  }
});
