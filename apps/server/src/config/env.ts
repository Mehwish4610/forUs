export const env = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  JWT_SECRET: process.env.JWT_SECRET || 
  "CHANGE_ME_IN_PRODUCTION",
};