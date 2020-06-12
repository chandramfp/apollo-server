import { config } from 'dotenv';

config();

const configuration = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    serviceUrl: process.env.SERVICE_URL,
};

export default configuration;