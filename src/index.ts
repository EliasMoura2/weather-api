import { envs } from './config';
import server from './server';

const PORT = envs.PORT ?? 4000;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
