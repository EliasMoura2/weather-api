type Location = {
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lon: number;
  state: string;
  zip: string;
};

export class LocationEntity {
  private city: string;
  private country: string;
  private countryCode: string;
  private lat: number;
  private lon: number;
  private state: string;
  private zip: string;

  constructor({ city, country, countryCode, lat, lon, state, zip }: Location) {
    this.city = city;
    this.country = country;
    this.countryCode = countryCode;
    this.lat = lat;
    this.lon = lon;
    this.state = state;
    this.zip = zip;
  }
}
