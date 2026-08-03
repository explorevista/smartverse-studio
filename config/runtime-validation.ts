import { runtimeEnvironmentConfig, validateRuntimeEnvironment } from "@/config/environment";

export interface RuntimeValidationConfig {
  enabled: boolean;
  strictMode: boolean;
  failOnWarning: boolean;
  failOnError: boolean;
  environment: string | null;
  checks: Array<{
    name: string;
    status: "passed" | "warning" | "failed";
    message: string;
  }>;
}

export const runtimeValidationConfig: RuntimeValidationConfig = {
  enabled: true,
  strictMode: false,
  failOnWarning: false,
  failOnError: false,
  environment: runtimeEnvironmentConfig.nodeEnv ?? null,
  checks: [
    {
      name: "environment",
      status: validateRuntimeEnvironment().issues.length ? "warning" : "passed",
      message: validateRuntimeEnvironment().issues.length ? "Runtime validation found pending verification." : "Runtime environment validation passed.",
    },
  ],
};

export const runtimeValidation = Object.freeze({
  config: runtimeValidationConfig,
});
