import dotenv from 'dotenv';

dotenv.config()

export const BACK_PORT = process.env.BACKEND_PORT || 3000;
export const FRONT_PORT = process.env.FRONTEND_PORT || 3001;