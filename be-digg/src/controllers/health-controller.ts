import { Request, Response } from "express";

export const handleCheckHealth = (_req: Request, res: Response) => {
  res.status(200).json({ success: true, result: "UP" });
};
