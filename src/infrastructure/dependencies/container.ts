import { container } from "tsyringe";
import {
  LOCATION_FINDER_CONTROLLER,
  LOCATION_FINDER_SERVICE,
  LOCATION_FINDER_USECASE,
  LOCATION_MAPPER,
  LocationMapper,
} from "../../domain";
import {
  LocationFinderController,
} from "../controllers";
import { LocationFinderUseCase } from "../../application";
import { LocationFinderService } from "../services";

container.register(LOCATION_FINDER_CONTROLLER, {
  useClass: LocationFinderController,
});

container.register(LOCATION_FINDER_USECASE, {
  useClass: LocationFinderUseCase,
});

container.register(LOCATION_FINDER_SERVICE, {
  useClass: LocationFinderService,
});

container.register(LOCATION_MAPPER, {
  useClass: LocationMapper,
});

export default container;
