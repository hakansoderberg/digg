import database from "../database";
import { CreateUserRequest } from "../interfaces/CreateUserRequest";
import { User } from "../interfaces/User";
import logger from "../logger";

export const addUserToDB = (userRequest: CreateUserRequest): void => {
  database.push(userRequest);
  logger.info(`User '${userRequest.name}' was added to DB`)
};

export const getUsersFromDB = (limit: number, page: number): User[] => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return database.slice(start, end);
};
