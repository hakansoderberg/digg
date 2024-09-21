import { NextFunction, Request, Response } from "express";
import { CreateUserRequest } from "../interfaces/CreateUserRequest";
import { createUser, getUsers } from "../services/user-service";
import { getPaginationFromQuery } from "../utils/pagination";

/*
Controllers tar emot data och förbereder det för att skickas till servicen.
Ingen validering och en minimal felhantering. Något att förbättra vid tillfälle. 
*/
export const handleCreateUser = (req: Request, res: Response, _next: NextFunction) => {
  const { name, email, address, phoneNumber } = req.body;
  const userRequest: CreateUserRequest = { name, email, address, phoneNumber };
  try {
    createUser(userRequest);
    res.status(201).json({ success: true, result: "User was created" } as Result<string, string>);
  } catch (error: unknown) {
    res.status(500).json({ success: false, error: "Could not create user" } as Result<string, string>);
  }
};

export const handleGetUsers = (req: Request, res: Response) => {
  const { limit, page } = getPaginationFromQuery(req);
  try {
    const response = getUsers(limit, page);
    res.json({ success: true, result: response });
  } catch (error) {
    res.status(500).json({ success: false, error: "Could not retrieve users" } as Result<string, string>);
  }
};
