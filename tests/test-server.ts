import { Server } from "../src/server";
import { envs } from "../src/shared/config/envs";
import { AppRoutes } from "../src/routes";

export const testServer = new Server({
  port: envs.PORT,
  routes: AppRoutes.routes,
});
