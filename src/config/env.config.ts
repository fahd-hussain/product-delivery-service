import { ConfigType, Environment, Environments, Keys } from "../type";

const { REACT_APP_API_SERVER_URL, REACT_APP_DEPLOYMENT_ENV } = process.env;
const endPoint = REACT_APP_API_SERVER_URL || "";

const Config: ConfigType = {
  ENVIRONMENT: (REACT_APP_DEPLOYMENT_ENV || "LOCAL") as Environment,
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: endPoint,
    },
    DEVELOPMENT: {
      API_URL: endPoint,
    },
    STAGING: {
      API_URL: endPoint,
    },
    PRODUCTION: {
      API_URL: endPoint,
    },
  },
  env: function () {
    return this.ENVIRONMENT
      ? this.ENVIRONMENTS[this.ENVIRONMENT]
      : ({} as Keys);
  },
};

export default Config;
