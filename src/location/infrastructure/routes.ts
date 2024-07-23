import { Router } from "express";
import { container } from "tsyringe";
import { LocationFinderController } from "./controller";

export class LocationRoutes {
  static get routes(): Router {
    const router = Router();

    const locationFinderController = container.resolve(
      LocationFinderController
    );

    /**
     * @openapi
     * /location:
     *  get:
     *    summary: Get location
     *    description: Get location
     *    tags: [ location ]
     *    responses:
     *      200:
     *        description: Get location
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                location:
     *                  $ref: '#/components/schemas/Location'
     */
    router.get("/", locationFinderController.find);

    return router;
  }
}