import { ILocationFinderService } from '../../../src/domain/services/location-finder.service';
import { ILocationFinderUseCase } from '../../../src/domain/use-cases/location-finder.usecase';
import { LocationFinderUseCase } from '../../../src/application/location-finder.usecase';
import { LocationMapper } from '../../../src/domain/mappers/location.mapper';

describe('Location Finder UseCase', () => {
  let locationFinderUseCase: ILocationFinderUseCase;
  let locationFinderService: ILocationFinderService;
  let locationMapper: LocationMapper;

  beforeEach(() => {
    locationFinderService = {} as ILocationFinderService;
    locationMapper = new LocationMapper();
    locationFinderUseCase = new LocationFinderUseCase(locationFinderService, locationMapper);
  });

  it('should find a location', async () => {
    // Arrange
    const location = {
      query: '24.48.0.1',
      status: 'success',
      country: 'Canada',
      countryCode: 'CA',
      region: 'QC',
      regionName: 'Quebec',
      city: 'Montreal',
      zip: 'H1K',
      lat: 45.6085,
      lon: -73.5493,
      timezone: 'America/Toronto',
      isp: 'Le Groupe Videotron Ltee',
      org: 'Videotron Ltee',
      as: 'AS5769 Videotron Ltee',
    };

    locationFinderService.find = jest.fn().mockImplementation(() => Promise.resolve({ data: location }));

    const locationExpected = {
      city: 'Montreal',
      country: 'Canada',
      countryCode: 'CA',
      lat: 45.6085,
      lon: -73.5493,
      state: 'Quebec',
      zip: 'H1K',
    };

    // Act
    const response = await locationFinderUseCase.find();

    // Assert
    expect(response).toEqual(locationExpected);
  });
});
