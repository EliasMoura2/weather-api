import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  NODE_ENV: get('NODE_ENV').asString(),
  OPEN_WEATHER_APPID: get('OPEN_WEATHER_APPID').required().asString(),
};
