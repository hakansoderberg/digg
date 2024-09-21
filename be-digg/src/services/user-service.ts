import { addUserToDB, getUsersFromDB } from "./database-service";
import { CreateUserRequest } from "../interfaces/CreateUserRequest";
import { mapResponseWithPagination } from "../utils/pagination";

export const createUser = (userRequest: CreateUserRequest) => {
  addUserToDB(userRequest);
};

/* Returnerar önskad delmängd av users och även information om paginering för att underlätta i frontend */
export const getUsers = (limit: number, page: number) => {
  const users = getUsersFromDB(limit, page);
  return mapResponseWithPagination(limit, page, users);
};
