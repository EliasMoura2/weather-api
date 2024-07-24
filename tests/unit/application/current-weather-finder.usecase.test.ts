import { ILocationFinderService } from "../../../src/domain/services/location-finder.service";
import { CurrentWeatherFinderUseCase } from "../../../src/application/current-weather-finder.usecase";
import { ICurrentWeatherFinderUseCase } from "../../../src/domain/use-cases/current-weather-finder.usecase";
import { ICurrentWeatherFinderService } from "../../../src/domain/services/current-weather-finder.service";
import { CurrentWeatherMapper } from "../../../src/domain/mappers/current-weather.mapper";

describe("Current Weather UseCase", () => {
  let currentWeatherFinderUseCase: ICurrentWeatherFinderUseCase;
  let locationFinderService: ILocationFinderService;
  let currentWeatherFinderService: ICurrentWeatherFinderService;
  let currentWeatherMapper: CurrentWeatherMapper;

  beforeEach(() => {
    locationFinderService = {} as ILocationFinderService;
    currentWeatherFinderService = {} as ICurrentWeatherFinderService;
    currentWeatherMapper = new CurrentWeatherMapper();
    currentWeatherFinderUseCase = new CurrentWeatherFinderUseCase(
      locationFinderService,
      currentWeatherFinderService,
      currentWeatherMapper
    );
  });

  it("should find a location", async () => {
    // Arrange
    const city = "";

    const location = {
      city: "Montreal",
    };

    const weather = {
      coord: {
        lon: -73.5878,
        lat: 45.5088,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 22.43,
        feels_like: 22.71,
        temp_min: 20.67,
        temp_max: 24.02,
        pressure: 1020,
        humidity: 76,
        sea_level: 1020,
        grnd_level: 1016,
      },
      visibility: 10000,
      wind: {
        speed: 2.57,
        deg: 80,
      },
      clouds: {
        all: 75,
      },
      dt: 1721829667,
      sys: {
        type: 1,
        id: 498,
        country: "CA",
        sunrise: 1721813377,
        sunset: 1721867508,
      },
      timezone: -14400,
      id: 6077243,
      name: "Montreal",
      cod: 200,
    };

    locationFinderService.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: location }));

    currentWeatherFinderService.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: weather }));

    const currentWeatherExpected = {
      city: "Montreal",
      countryCode: "CA",
      description: "broken clouds",
      humidity: 76,
      pressure: 1020,
      temperature: 22.43,
      tempMax: 24.02,
      tempMin: 20.67,
      windSpeed: 2.57,
    };

    // Act
    const response = await currentWeatherFinderUseCase.find(city);

    // Assert
    expect(response).toEqual(currentWeatherExpected);
  });
});
