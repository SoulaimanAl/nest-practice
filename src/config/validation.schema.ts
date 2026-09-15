import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // ============================================
  // Application
  // ============================================
  NODE_ENV: Joi.string()
    .valid('development', 'staging', 'production', 'test')
    .default('development'),

  PORT: Joi.number().port().default(3000),

  // ============================================
  // Server
  // ============================================
  CORS_ALLOWED_ORIGINS: Joi.string().required(),
  SERVER_READ_TIMEOUT: Joi.number().positive().default(15),
  SERVER_WRITE_TIMEOUT: Joi.number().positive().default(15),
  SERVER_IDLE_TIMEOUT: Joi.number().positive().default(60),

  // ============================================
  // Database
  // ============================================
  DATABASE_URL: Joi.string()
    .uri({ scheme: ['postgresql', 'postgres'] })
    .required(),

  // ============================================
  // Redis
  // ============================================
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().port().default(6379),

  // ============================================
  // Auth (Clerk)
  // ============================================
  CLERK_SECRET_KEY: Joi.string().required(),
  CLERK_PUBLISHABLE_KEY: Joi.string().required(),

  // ============================================
  // Integration (Resend)
  // ============================================
  RESEND_API_KEY: Joi.string().required(),
  RESEND_FROM_EMAIL: Joi.string().email().required(),

  // ============================================
  // Observability (New Relic) — optional
  // ============================================
  NEW_RELIC_LICENSE_KEY: Joi.string().optional(),
  NEW_RELIC_APP_NAME: Joi.string().optional(),
});