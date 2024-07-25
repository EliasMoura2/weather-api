import { container } from 'tsyringe';
import {
  CURRENT_WEATHER_CONTROLLER,
  CURRENT_WEATHER_MAPPER,
  CURRENT_WEATHER_SERVICE,
  CURRENT_WEATHER_USECASE,
  CurrentWeatherMapper,
  FORECAST_WEATHER_CONTROLLER,
  FORECAST_WEATHER_MAPPER,
  FORECAST_WEATHER_SERVICE,
  FORECAST_WEATHER_USECASE,
  ForecastWeatherMapper,
  LOCATION_FINDER_CONTROLLER,
  LOCATION_FINDER_SERVICE,
  LOCATION_FINDER_USECASE,
  LOCATION_MAPPER,
  LocationMapper,
} from '../../domain';
import { CurrentWeatherController, ForecastWeatherController, LocationFinderController } from '../controllers';
import { CurrentWeatherService, ForecastWeatherService, LocationFinderService } from '../services';
import { CurrentWeatherUseCase, ForecastWeatherUseCase, LocationFinderUseCase } from '../../application';

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

container.register(CURRENT_WEATHER_CONTROLLER, {
  useClass: CurrentWeatherController,
});

container.register(CURRENT_WEATHER_USECASE, {
  useClass: CurrentWeatherUseCase,
});

container.register(CURRENT_WEATHER_SERVICE, {
  useClass: CurrentWeatherService,
});

container.register(CURRENT_WEATHER_MAPPER, {
  useClass: CurrentWeatherMapper,
});

container.register(FORECAST_WEATHER_CONTROLLER, {
  useClass: ForecastWeatherController,
});

container.register(FORECAST_WEATHER_USECASE, {
  useClass: ForecastWeatherUseCase,
});

container.register(FORECAST_WEATHER_SERVICE, {
  useClass: ForecastWeatherService,
});

container.register(FORECAST_WEATHER_MAPPER, {
  useClass: ForecastWeatherMapper,
});

export default container;
