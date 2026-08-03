import { integrationRegistry } from "@/config/integrations";
import { siteConfig } from "@/config/site";

export interface RuntimeEnvironmentConfig {
  nodeEnv: "development" | "production" | "test";
  isProduction: boolean;
  isDevelopment: boolean;
  isTest: boolean;
  appName: string;
  version: string | null;
  repository: string | null;
  productionUrl: string | null;
  deploymentTarget: string | null;
  deploymentRegion: string | null;
  defaultLocale: string | null;
  timezone: string | null;
}

export interface RuntimeMetadataConfig {
  buildVersion: string | null;
  buildTimestamp: string | null;
  releaseChannel: "production" | "staging" | "preview" | "development" | "test" | null;
  commitSha: string | null;
  environmentName: string | null;
}

export interface RuntimeCapabilityConfig {
  imageOptimization: boolean;
  pwa: boolean;
  offlineSupport: boolean;
  analyticsAvailable: boolean;
  adsenseAvailable: boolean;
  firebaseAvailable: boolean;
}

export interface RuntimeValidationIssue {
  field: string;
  message: string;
  severity: "warning" | "error";
}

export interface RuntimeValidationSummary {
  isValid: boolean;
  issues: RuntimeValidationIssue[];
}

export interface RuntimeReadinessSummary {
  environmentReady: boolean;
  productionReady: boolean;
  deploymentReady: boolean;
  configurationComplete: boolean;
  pendingVerification: string[];
}

const normalizeDeploymentTarget = (value: string | undefined): string | null => {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();

  if (normalized.includes("vercel")) {
    return "vercel";
  }

  if (normalized.includes("netlify")) {
    return "netlify";
  }

  if (normalized.includes("firebase")) {
    return "firebase-hosting";
  }

  if (normalized.includes("docker")) {
    return "docker";
  }

  if (normalized.includes("self") || normalized.includes("host")) {
    return "self-hosted";
  }

  return normalized;
};

const detectNodeEnv = (): RuntimeEnvironmentConfig["nodeEnv"] => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }

  if (process.env.NODE_ENV === "test") {
    return "test";
  }

  return "development";
};

export const runtimeEnvironmentConfig: RuntimeEnvironmentConfig = {
  nodeEnv: detectNodeEnv(),
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test",
  isTest: process.env.NODE_ENV === "test",
  appName: siteConfig.name,
  version: process.env.NEXT_PUBLIC_APP_VERSION ?? null,
  repository: siteConfig.organization.repository ?? null,
  productionUrl: siteConfig.productionUrl,
  deploymentTarget: normalizeDeploymentTarget(process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET ?? process.env.VERCEL ? "vercel" : process.env.NETLIFY ? "netlify" : undefined),
  deploymentRegion: process.env.NEXT_PUBLIC_REGION ?? null,
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? null,
  timezone: process.env.NEXT_PUBLIC_TIMEZONE ?? null,
};

export const runtimeMetadataConfig: RuntimeMetadataConfig = {
  buildVersion: process.env.NEXT_PUBLIC_APP_VERSION ?? null,
  buildTimestamp: process.env.NEXT_PUBLIC_BUILD_TIMESTAMP ?? null,
  releaseChannel: (process.env.NEXT_PUBLIC_RELEASE_CHANNEL as RuntimeMetadataConfig["releaseChannel"]) ?? null,
  commitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? null,
  environmentName: process.env.NEXT_PUBLIC_ENVIRONMENT_NAME ?? runtimeEnvironmentConfig.nodeEnv ?? null,
};

export const runtimeCapabilityConfig: RuntimeCapabilityConfig = {
  imageOptimization: true,
  pwa: false,
  offlineSupport: false,
  analyticsAvailable: integrationRegistry.analytics.ga4MeasurementId !== null,
  adsenseAvailable: integrationRegistry.analytics.adsensePublisherId !== null,
  firebaseAvailable: integrationRegistry.firebase.projectId !== null,
};

export const validateRuntimeEnvironment = (config: RuntimeEnvironmentConfig = runtimeEnvironmentConfig): RuntimeValidationSummary => {
  const issues: RuntimeValidationIssue[] = [];

  if (!config.productionUrl) {
    issues.push({ field: "productionUrl", message: "Production URL is not yet verified.", severity: "warning" });
  }

  if (!config.repository) {
    issues.push({ field: "repository", message: "Repository source is not yet verified.", severity: "warning" });
  }

  if (!config.deploymentTarget) {
    issues.push({ field: "deploymentTarget", message: "Deployment target is not yet verified.", severity: "warning" });
  }

  if (!config.defaultLocale) {
    issues.push({ field: "defaultLocale", message: "Default locale is not yet configured.", severity: "warning" });
  }

  if (!config.timezone) {
    issues.push({ field: "timezone", message: "Timezone is not yet configured.", severity: "warning" });
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
};

export const runtimeReadinessSummary: RuntimeReadinessSummary = {
  environmentReady: runtimeEnvironmentConfig.nodeEnv !== null,
  productionReady: runtimeEnvironmentConfig.isProduction ? Boolean(runtimeEnvironmentConfig.productionUrl) : false,
  deploymentReady: Boolean(runtimeEnvironmentConfig.deploymentTarget),
  configurationComplete: !validateRuntimeEnvironment().issues.length,
  pendingVerification: validateRuntimeEnvironment().issues.map((issue) => issue.field),
};

export const runtimeEnvironment = Object.freeze({
  config: runtimeEnvironmentConfig,
  metadata: runtimeMetadataConfig,
  capabilities: runtimeCapabilityConfig,
  validation: validateRuntimeEnvironment(),
  readiness: runtimeReadinessSummary,
});
