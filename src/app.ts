import "reflect-metadata";
import { AppRoutes } from "./routes";
import { Server } from "./server";
import { envs } from "./shared";

(() => {
  main();
})();

async function main() {
  const server = new Server({ 
    port: envs.PORT,
    routes: AppRoutes.routes
  })

  server.start();
}