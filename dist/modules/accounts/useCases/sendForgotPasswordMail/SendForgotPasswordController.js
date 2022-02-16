"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordController = void 0;

var _tsyringe = require("tsyringe");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

class SendForgotPasswordController {
  async handle(request, response) {
    const {
      email
    } = request.body;

    const sendForgotPasswordUseCase = _tsyringe.container.resolve(_SendForgotPasswordMailUseCase.SendForgotPasswordUseCase);

    await sendForgotPasswordUseCase.execute(email);
    return response.status(200).send();
  }

}

exports.SendForgotPasswordController = SendForgotPasswordController;