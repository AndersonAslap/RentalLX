import { Router } from "express";

import { SendForgotPasswordController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordController";

const passwordRoutes = Router();

const sendForgotPasswirdMailController = new SendForgotPasswordController();

passwordRoutes.post("/forgot", sendForgotPasswirdMailController.handle);

export { passwordRoutes };
