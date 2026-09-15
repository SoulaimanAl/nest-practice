export interface AppConfig {
  env: string;
  server: {
    port: number;
    corsAllowedOrigins: string[];
    readTimeout: number;
    writeTimeout: number;
    idleTimeout: number;
  };
  database: {
    url: string;
  };
  redis: {
    host: string;
    port: number;
  };
  clerk: {
    secretKey: string;
    publishableKey: string;
  };
  integration: {
    resendApiKey: string;
    resendFromEmail: string;
  };
  observability: {
    newRelicLicenseKey?: string;
    newRelicAppName?: string;
  };
}

export default (): AppConfig => ({
  env: process.env.NODE_ENV!,

  server: {
    port: parseInt(process.env.PORT!, 10),
    corsAllowedOrigins: process.env.CORS_ALLOWED_ORIGINS!.split(',').map((o) => o.trim()),
    readTimeout: parseInt(process.env.SERVER_READ_TIMEOUT!, 10),
    writeTimeout: parseInt(process.env.SERVER_WRITE_TIMEOUT!, 10),
    idleTimeout: parseInt(process.env.SERVER_IDLE_TIMEOUT!, 10),
  },

  database: {
    url: process.env.DATABASE_URL!,
  },

  redis: {
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT!, 10),
  },

  clerk: {
    secretKey: process.env.CLERK_SECRET_KEY!,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
  },

  integration: {
    resendApiKey: process.env.RESEND_API_KEY!,
    resendFromEmail: process.env.RESEND_FROM_EMAIL!,
  },

  observability: {
    newRelicLicenseKey: process.env.NEW_RELIC_LICENSE_KEY,
    newRelicAppName: process.env.NEW_RELIC_APP_NAME,
  },
});