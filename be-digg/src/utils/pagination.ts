import { Request } from "express";
import { User } from "../interfaces/User";
import database from "../database";

export const getPaginationFromQuery = (request: Request) => {
  const limit = request.query.limit ? +request.query.limit : 5;
  const page = request.query.page ? +request.query.page : 1;
  return { limit, page };
};

export const mapResponseWithPagination = (limit: number, page: number, users: User[]) => {
  const totalItems = database.length;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage: page, users };
};
