import request from "supertest";
import { app, server } from "../index";
import { CreateUserRequest } from "../interfaces/CreateUserRequest";

describe("User Controller /digg/user", () => {
  afterAll((done) => {
    server.close(done);
  });
  it("GET should return 5 users", async () => {
    const response = await request(app).get("/digg/user");
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.result.users.length).toBe(5);
  });
  it("POST should create a user", async () => {
    const req: CreateUserRequest = { name: "Name", address: "Address", email: "email", phoneNumber: "phonenumber" };
    const response = await request(app).post("/digg/user").send(req);
    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
  });
});
