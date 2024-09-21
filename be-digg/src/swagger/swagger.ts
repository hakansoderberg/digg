import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { apiDocs } from "./apiDocs";

export const setupSwagger = (app: Express): void => {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(apiDocs));
};
