import { hash } from "bcrypt";
import request from "supertest";
import { Connection, createConnection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { app } from "@shared/infra/http/app";

let connection: Connection;

describe("Create Category Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidv4();
    const password = await hash("admin", 8);

    console.log(password);

    await connection.query(
      `insert into users(id, name, email, password, "isAdmin", created_at, driver_license)
        values(${id}, 'admin', 'admin@rentx.com.br', ${password}, true, NOW(), 'xxxxxxxx'}`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to create a new category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });

    const response = await request(app).post("/categories").send({
      name: "Category 1",
      description: "Category Supertest",
    });

    expect(response.status).toBe(201);
  });
});
