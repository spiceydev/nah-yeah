declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    NEXTAUTH_SECRET: string;
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: number;
    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_FROM: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
  }
}
