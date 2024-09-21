import express from "express";
import cors from "cors";
import { handleCreateUser, handleGetUsers } from "./controllers/user-controller";
import { handleCheckHealth } from "./controllers/health-controller";
import { requestLogger } from "./logger";
import { setupSwagger } from "./swagger/swagger";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(requestLogger);
setupSwagger(app);

app.post("/digg/user", handleCreateUser);
app.get("/digg/user", handleGetUsers);
app.get("/digg/health", handleCheckHealth);

const start = () => {
  return app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
const server = start();


export { app, server };
