"use strict";

var _UsersRepositoryInMemory = require("../../repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensInMemory = require("../../repositories/in-memory/UsersTokensInMemory");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implemetations/DayjsDateProvider");

var _MailProviderInMemory = require("../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let dateProvider;
let usersTokensRepositoryInMemory;
let mailProvider;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    usersTokensRepositoryInMemory = new _UsersTokensInMemory.UsersTokensRepositoryInMemory();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProvider);
  });
  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "1182466063",
      email: "dugru@tal.gf",
      name: "Clayton Hudson",
      password: "1234"
    });
    await sendForgotPasswordMailUseCase.execute("dugru@tal.gf");
    expect(sendMail).toHaveBeenCalled();
  });
  it("should not be able to send an email if user does not exits", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("urihibi@uce.fo")).rejects.toEqual(new _AppError.AppError("User does not exists!"));
  });
  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");
    await usersRepositoryInMemory.create({
      driver_license: "37762265",
      email: "lajpeima@muktebnij.aw",
      name: "Fannie Reeves",
      password: "1234"
    });
    await sendForgotPasswordMailUseCase.execute("lajpeima@muktebnij.aw");
    expect(generateTokenMail).toHaveBeenCalled();
  });
});