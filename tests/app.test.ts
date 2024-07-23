import { Server } from '../src/server';
import { envs } from '../src/shared';

jest.mock('../src/server');

describe('App', () => {
  it('should call server with arguments and start', async () => {
    await import('../src/app');

    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      routes: expect.any(Function),
    })
    expect(Server.prototype.start).toHaveBeenCalled()
  });
});