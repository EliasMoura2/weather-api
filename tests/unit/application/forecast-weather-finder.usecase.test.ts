import { ILocationFinderService } from "../../../src/domain/services/location-finder.service";
import { IForecastWeatherFinderUseCase } from "../../../src/domain/use-cases/forecast-weather-finder.usecase";
import { ForecastWeatherFinderUseCase } from "../../../src/application/forecast-weather-finder.usecase";
import { IForecastWeatherFinderService } from "../../../src/domain/services/forecast-weather-finder.service";
import { ForecastWeatherMapper } from "../../../src/domain/mappers/forecast-weather.mapper";

describe("Current Weather UseCase", () => {
  let forecastWeatherFinderUseCase: IForecastWeatherFinderUseCase;
  let locationFinderService: ILocationFinderService;
  let forecastWeatherFinderService: IForecastWeatherFinderService;
  let forecastWeatherMapper: ForecastWeatherMapper;

  beforeEach(() => {
    locationFinderService = {} as ILocationFinderService;
    forecastWeatherFinderService = {} as IForecastWeatherFinderService;
    forecastWeatherMapper = new ForecastWeatherMapper();
    forecastWeatherFinderUseCase = new ForecastWeatherFinderUseCase(
      locationFinderService,
      forecastWeatherFinderService,
      forecastWeatherMapper
    );
  });

  it("should find a location", async () => {
    // Arrange
    const city = "";

    const location = {
      city: "Montreal",
    };

    const forecastWeatherMock = {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1721833200,
          main: {
            temp: 23.27,
            feels_like: 23.61,
            temp_min: 23.27,
            temp_max: 24.42,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1016,
            humidity: 75,
            temp_kf: -1.15,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 75,
          },
          wind: {
            speed: 3.52,
            deg: 124,
            gust: 4.73,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2024-07-24 15:00:00",
        },
        {
          dt: 1721844000,
          main: {
            temp: 24.72,
            feels_like: 25.02,
            temp_min: 24.72,
            temp_max: 27.62,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1013,
            humidity: 68,
            temp_kf: -2.9,
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d",
            },
          ],
          clouds: {
            all: 75,
          },
          wind: {
            speed: 4.83,
            deg: 146,
            gust: 6.1,
          },
          visibility: 10000,
          pop: 0.37,
          rain: {
            "3h": 0.46,
          },
          sys: {
            pod: "d",
          },
          dt_txt: "2024-07-24 18:00:00",
        },
      ],
      city: {
        id: 6077243,
        name: "Montreal",
        coord: {
          lat: 45.5088,
          lon: -73.5878,
        },
        country: "CA",
        population: 3268513,
        timezone: -14400,
        sunrise: 1721813377,
        sunset: 1721867508,
      },
    };

    locationFinderService.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: location }));

    forecastWeatherFinderService.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: forecastWeatherMock }));

    const forecastWeatherExpected = {
      city: "Montreal",
      countryCode: "CA",
      weathers: [
        {
          date: "2024-07-24 15:00:00",
          description: "broken clouds",
          humidity: 75,
          pressure: 1019,
          temperature: 23.27,
          tempMax: 24.42,
          tempMin: 23.27,
          windSpeed: 3.52,
        },
        {
          date: "2024-07-24 18:00:00",
          description: "light rain",
          humidity: 68,
          pressure: 1018,
          temperature: 24.72,
          tempMax: 27.62,
          tempMin: 24.72,
          windSpeed: 4.83,
        },
      ],
    };

    // Act
    const response = await forecastWeatherFinderUseCase.find(city);

    // Assert
    expect(response).toEqual(forecastWeatherExpected);
  });
});
