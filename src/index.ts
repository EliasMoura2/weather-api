import { envs } from './config';
import app from './app';

const PORT = envs.PORT ?? 4000;

// eslint-disable-next-line no-console
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default server;
