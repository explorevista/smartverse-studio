import { runtimeEnvironmentConfig } from "@/config/environment";
import { siteConfig } from "@/config/site";

export interface MonitoringConfig {
  enabled: boolean;
  provider: "sentry" | "openTelemetry" | "datadog" | "custom" | null;
  serviceName: string | null;
  environment: string | null;
  endpoint: string | null;
  logLevel: "debug" | "info" | "warn" | "error" | null;
  performanceMonitoring: boolean;
  errorTracking: boolean;
  sessionReplay: boolean;
  tracingEnabled: boolean;
  sampleRate: number | null;
}

export interface MonitoringReadinessSummary {
  configured: boolean;
  ready: boolean;
  pendingVerification: string[];
}

export const monitoringConfig: MonitoringConfig = {
  enabled: false,
  provider: null,
  serviceName: siteConfig.name,
  environment: runtimeEnvironmentConfig.nodeEnv ?? null,
  endpoint: null,
  logLevel: null,
  performanceMonitoring: false,
  errorTracking: false,
  sessionReplay: false,
  tracingEnabled: false,
  sampleRate: null,
};

export const monitoringReadinessSummary: MonitoringReadinessSummary = {
  configured: false,
  ready: false,
  pendingVerification: ["provider", "endpoint"],
};

export const monitoring = Object.freeze({
  config: monitoringConfig,
  readiness: monitoringReadinessSummary,
});
