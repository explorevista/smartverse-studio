import { runtimeEnvironmentConfig, runtimeMetadataConfig } from "@/config/environment";

export interface ErrorReportingConfig {
  enabled: boolean;
  provider: "sentry" | "bugsnag" | "custom" | null;
  endpoint: string | null;
  environment: string | null;
  sampleRate: number | null;
  includeUserContext: boolean;
  includeSessionContext: boolean;
  notificationsEnabled: boolean;
}

export const errorReportingConfig: ErrorReportingConfig = {
  enabled: false,
  provider: null,
  endpoint: null,
  environment: runtimeMetadataConfig.environmentName ?? runtimeEnvironmentConfig.nodeEnv ?? null,
  sampleRate: null,
  includeUserContext: false,
  includeSessionContext: false,
  notificationsEnabled: false,
};

export const errorReporting = Object.freeze({
  config: errorReportingConfig,
});
