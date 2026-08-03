import { runtimeEnvironmentConfig } from "@/config/environment";
import { monitoringConfig } from "@/config/monitoring";

export interface ApplicationHealthConfig {
  enabled: boolean;
  readinessProbe: boolean;
  livenessProbe: boolean;
  startupProbe: boolean;
  intervalSeconds: number | null;
  timeoutSeconds: number | null;
  failureThreshold: number | null;
  environment: string | null;
}

export const applicationHealthConfig: ApplicationHealthConfig = {
  enabled: true,
  readinessProbe: true,
  livenessProbe: true,
  startupProbe: true,
  intervalSeconds: runtimeEnvironmentConfig.isProduction ? 30 : null,
  timeoutSeconds: runtimeEnvironmentConfig.isProduction ? 5 : null,
  failureThreshold: runtimeEnvironmentConfig.isProduction ? 3 : null,
  environment: runtimeEnvironmentConfig.nodeEnv ?? null,
};

export const applicationHealth = Object.freeze({
  config: applicationHealthConfig,
  monitoring: monitoringConfig,
});
