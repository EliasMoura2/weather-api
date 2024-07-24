type CurrentWeather = {
  city: string,
  countryCode: string,
  description: string,
  humidity: number,
  pressure: number,
  temperature: number,
  tempMax: number,
  tempMin: number,
  windSpeed: number,
}

export class CurrentWeatherEntity {
  private city: string
  private countryCode: string
  private description: string
  private humidity: number
  private pressure: number
  private temperature: number
  private tempMax: number
  private tempMin: number
  private windSpeed: number

  constructor({
    city,
    countryCode,
    description,
    humidity,
    pressure,
    temperature,
    tempMax,
    tempMin,
    windSpeed
  }: CurrentWeather) {
    this.city = city
    this.countryCode = countryCode
    this.description = description
    this.humidity = humidity
    this.pressure = pressure
    this.temperature = temperature
    this.tempMax = tempMax
    this.tempMin = tempMin
    this.windSpeed = windSpeed
  }
}