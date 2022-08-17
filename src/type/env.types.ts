export type Environment = "LOCAL" | "DEVELOPMENT" | "STAGING" | "PRODUCTION";

export type Keys = { API_URL: string };

export type Environments = {
  [key in Environment]: Keys;
};

export type ConfigType = {
  ENVIRONMENT: Environment;
  ENVIRONMENTS: Environments;
  env: () => Keys;
};
