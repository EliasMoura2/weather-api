import { Router } from 'express';
import { LOCATION_FINDER_CONTROLLER } from '../../domain';
import { LocationFinderController } from '../controllers';
import container from '../../infrastructure/dependencies/container';

export class LocationRoutes {
  static get routes(): Router {
    const router = Router();

    const locationFinderController: LocationFinderController = container.resolve(
      LOCATION_FINDER_CONTROLLER
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
    router.get('/', locationFinderController.find);

    return router;
  }
}