import { config } from 'dotenv';

config();

const configuration = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
};

export default configuration;