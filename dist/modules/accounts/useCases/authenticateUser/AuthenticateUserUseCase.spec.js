"use strict";

var _UsersRepositoryInMemory = require("../../repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensInMemory = require("../../repositories/in-memory/UsersTokensInMemory");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implemetations/DayjsDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

let usersRepositoryInMemory;
let usersTokensRepositoryInMemory;
let authenticateUserUseCase;
let createUserUseCase;
let dateProvider;
describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensInMemory.UsersTokensRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepositoryInMemory);
  });
  it("should be able to authenticate an user", async () => {
    const user = {
      driver_license: "2022_liscense",
      email: "user@test.com",
      password: "123456",
      name: "User Test"
    };
    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
  it("should not be able to authenticate an nonexistent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@gmail.com",
        password: "152436"
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should not be able to authenticate with incorrect password", async () => {
    expect(async () => {
      const user = {
        driver_license: "2022_liscense",
        email: "user@user.com",
        password: "123456",
        name: "User Test Error"
      };
      await createUserUseCase.execute(user);
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrectPassword"
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
});