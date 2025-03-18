import morgan from "morgan";
import helmet from "helmet";
import express, { json, Router } from "express";
import { APP, RESOURCES } from "./endpoints.js";
import corsMiddleware from "../global/middlewares/cors.js";
import errorMiddleware from "../global/middlewares/error.js";
import createHealthcareRouter from "./healthcare/healthcare.router.js";
import createArticlesRouter from "./articles/articles.router.js";
import createUsersRouter from "./users/users.router.js";
import { notFoundHandler } from "../global/handlers/notFound.js";

const createApp = ({
   pingPool,
   articlesModel,
   usersModel,
}) => {
   const app = express();
   const mainRouter = Router();

   app.use(json());
   app.use(helmet());
   app.use(morgan('dev'));
   app.use(corsMiddleware());

   mainRouter.use(RESOURCES.PING, createHealthcareRouter({ pingPool }));
   mainRouter.use(RESOURCES.ARTICLES, createArticlesRouter({ articlesModel }));
   mainRouter.use(RESOURCES.USERS, createUsersRouter({ usersModel }));

   app.use(APP.VERSION_1, mainRouter);
   app.all('*', notFoundHandler);
   app.use(errorMiddleware);

   return app;
}

export default createApp;