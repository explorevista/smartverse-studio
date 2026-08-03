import { runtimeCapabilityConfig, runtimeEnvironmentConfig, runtimeMetadataConfig } from "@/config/environment";
import { integrationRegistry } from "@/config/integrations";
import { verifiedProductionAssetManifest } from "@/config/asset-manifest";
import { assetMappingRegistry, assetMappingSummary } from "@/config/asset-mapping";
import { assetRegistry } from "@/config/assets";
import { accessibilityConfig } from "@/config/accessibility";
import { errorReportingConfig } from "@/config/error-reporting";
import { monitoringConfig } from "@/config/monitoring";
import { performanceConfig } from "@/config/performance";
import { seoRegistry } from "@/config/seo";
import { securityConfig } from "@/config/security";
import { siteConfig } from "@/config/site";

export type DeploymentProvider = "vercel" | "netlify" | "firebase-hosting" | "docker" | "self-hosted" | null;
export type DeploymentReleaseChannel = "production" | "staging" | "preview" | "development" | "test" | null;
export type DeploymentStatus = "ready" | "degraded" | "not-configured";
export type DeploymentReadinessStatus = "ready" | "pending" | "blocked" | "not-verified";

export interface DeploymentConfig {
  environment: string | null;
  target: string | null;
  provider: DeploymentProvider;
  region: string | null;
  domain: string | null;
  releaseChannel: DeploymentReleaseChannel;
  buildId: string | null;
  rollbackStrategy: "manual" | "automatic" | null;
  status: DeploymentStatus;
}

export interface DeploymentReadinessFlag {
  name: string;
  status: DeploymentReadinessStatus;
  verified: boolean | null;
  value: string | number | boolean | null;
  detail: string | null;
}

export interface DeploymentValidationIssue {
  field: string;
  message: string;
  severity: "warning" | "error";
}

export interface DeploymentValidationSummary {
  isValid: boolean;
  issues: DeploymentValidationIssue[];
  warnings: string[];
  blockers: string[];
  completenessPercentage: number;
  readyChecks: number;
  pendingChecks: number;
  blockedChecks: number;
}

export interface DeploymentMetadata {
  appName: string | null;
  version: string | null;
  environment: string | null;
  releaseChannel: DeploymentReleaseChannel;
  buildVersion: string | null;
  buildTimestamp: string | null;
  commitSha: string | null;
  repository: string | null;
}

export interface DeploymentProviderConfig {
  selected: DeploymentProvider;
  displayName: string | null;
  verified: boolean;
  source: string | null;
}

export interface DeploymentEnvironmentConfig {
  runtime: string | null;
  target: string | null;
  region: string | null;
  locale: string | null;
  timezone: string | null;
  environmentName: string | null;
  releaseChannel: DeploymentReleaseChannel;
}

export interface DeploymentValidationConfig {
  summary: DeploymentValidationSummary;
  diagnostics: {
    warnings: string[];
    blockers: string[];
  };
}

export interface DeploymentReadinessConfig {
  flags: Record<string, DeploymentReadinessFlag>;
  score: number;
  readyChecks: number;
  pendingChecks: number;
  blockedChecks: number;
  complete: boolean;
  blockers: string[];
  warnings: string[];
}

export interface DeploymentHealthConfig {
  status: DeploymentStatus;
  score: number;
  message: string | null;
  lastVerified: string | null;
}

export interface DeploymentCapabilitiesConfig {
  imageOptimization: boolean;
  pwa: boolean;
  offlineSupport: boolean;
  analyticsAvailable: boolean;
  adsenseAvailable: boolean;
  firebaseAvailable: boolean;
}

export interface DeploymentSecurityConfig {
  strictTransportSecurity: boolean;
  allowedOrigins: string[];
  referrerPolicy: string | null;
  sameSiteCookies: string | null;
  contentSecurityPolicyConfigured: boolean;
}

export interface DeploymentDomainsConfig {
  production: string | null;
  canonicalBase: string | null;
  verified: boolean;
  allowedOrigins: string[];
}

export interface DeploymentSslConfig {
  httpsEnforced: boolean;
  verified: boolean;
  detail: string | null;
}

export interface DeploymentDnsConfig {
  configured: boolean;
  verified: boolean;
  detail: string | null;
}

export interface DeploymentRollbackConfig {
  strategy: "manual" | "automatic" | null;
  verified: boolean;
  detail: string | null;
}

export interface DeploymentVersioningConfig {
  buildVersion: string | null;
  buildTimestamp: string | null;
  releaseChannel: DeploymentReleaseChannel;
  commitSha: string | null;
  versionSource: string | null;
}

export interface DeploymentVerificationConfig {
  providerVerified: boolean;
  domainVerified: boolean;
  assetManifestVerified: boolean;
  assetRegistryVerified: boolean;
  seoVerified: boolean;
  securityVerified: boolean;
  productionReadinessVerified: boolean;
}

export interface DeploymentSummaryConfig {
  status: DeploymentStatus;
  readinessScore: number;
  completenessPercentage: number;
  verifiedChecks: number;
  pendingChecks: number;
  blockedChecks: number;
  blockers: string[];
  warnings: string[];
}

const normalizeDeploymentProvider = (value: string | null | undefined): DeploymentProvider => {
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

  return normalized as DeploymentProvider;
};

const getProviderDisplayName = (provider: DeploymentProvider): string | null => {
  switch (provider) {
    case "vercel":
      return "Vercel";
    case "netlify":
      return "Netlify";
    case "firebase-hosting":
      return "Firebase Hosting";
    case "docker":
      return "Docker";
    case "self-hosted":
      return "Self-hosted";
    default:
      return null;
  }
};

const createReadinessFlag = (
  name: string,
  value: string | number | boolean | null,
  verified: boolean,
  detail: string | null,
  statusOverride?: DeploymentReadinessStatus,
): DeploymentReadinessFlag => {
  const status = statusOverride ?? (verified ? "ready" : "pending");

  return {
    name,
    status,
    verified,
    value,
    detail: detail ?? (verified ? "Verified in configuration." : "NOT VERIFIED"),
  };
};

const deploymentProvider = normalizeDeploymentProvider(runtimeEnvironmentConfig.deploymentTarget);

export const deploymentConfig: DeploymentConfig = {
  environment: runtimeMetadataConfig.environmentName ?? runtimeEnvironmentConfig.nodeEnv ?? null,
  target: runtimeEnvironmentConfig.deploymentTarget,
  provider: deploymentProvider,
  region: runtimeEnvironmentConfig.deploymentRegion,
  domain: siteConfig.productionUrl,
  releaseChannel: runtimeMetadataConfig.releaseChannel,
  buildId: process.env.NEXT_PUBLIC_BUILD_ID ?? null,
  rollbackStrategy: null,
  status: "not-configured",
};

export const deploymentMetadata: DeploymentMetadata = {
  appName: runtimeEnvironmentConfig.appName ?? null,
  version: runtimeEnvironmentConfig.version ?? null,
  environment: deploymentConfig.environment,
  releaseChannel: deploymentConfig.releaseChannel,
  buildVersion: runtimeMetadataConfig.buildVersion ?? null,
  buildTimestamp: runtimeMetadataConfig.buildTimestamp ?? null,
  commitSha: runtimeMetadataConfig.commitSha ?? null,
  repository: runtimeEnvironmentConfig.repository ?? null,
};

export const deploymentProviderConfig: DeploymentProviderConfig = {
  selected: deploymentConfig.provider,
  displayName: getProviderDisplayName(deploymentConfig.provider),
  verified: deploymentConfig.provider !== null,
  source: runtimeEnvironmentConfig.deploymentTarget ?? null,
};

export const deploymentEnvironmentConfig: DeploymentEnvironmentConfig = {
  runtime: runtimeEnvironmentConfig.nodeEnv ?? null,
  target: deploymentConfig.target,
  region: deploymentConfig.region,
  locale: runtimeEnvironmentConfig.defaultLocale ?? null,
  timezone: runtimeEnvironmentConfig.timezone ?? null,
  environmentName: runtimeMetadataConfig.environmentName ?? null,
  releaseChannel: deploymentConfig.releaseChannel,
};

const firebaseFlag = createReadinessFlag(
  "Firebase",
  integrationRegistry.firebase.projectId ?? null,
  Boolean(integrationRegistry.firebase.projectId),
  integrationRegistry.firebase.projectId ? "Firebase project identifier is configured." : "Firebase project identifier is not verified.",
);

const assetManifestFlag = createReadinessFlag(
  "Asset Manifest",
  verifiedProductionAssetManifest.totalAssets,
  verifiedProductionAssetManifest.totalAssets > 0 && verifiedProductionAssetManifest.verifiedAssets > 0,
  verifiedProductionAssetManifest.totalAssets > 0 ? "Asset manifest is available with verified entries." : "Asset manifest is not verified.",
);

const assetRegistryFlag = createReadinessFlag(
  "Asset Registry",
  assetRegistry.logos.primary ?? assetRegistry.media.hero ?? null,
  assetRegistry.logos.primary !== null || assetRegistry.media.hero !== null,
  assetRegistry.logos.primary !== null || assetRegistry.media.hero !== null ? "Asset registry contains configured runtime references." : "Asset registry values are not verified.",
);

const assetMappingFlag = createReadinessFlag(
  "Asset Mapping",
  assetMappingSummary.mappedDestinations,
  assetMappingRegistry.length > 0 && assetMappingSummary.mappedDestinations > 0,
  assetMappingRegistry.length > 0 ? "Asset mapping registry is defined." : "Asset mapping registry is not verified.",
);

const seoFlag = createReadinessFlag(
  "SEO",
  seoRegistry.canonicalBase ?? null,
  Boolean(seoRegistry.canonicalBase && seoRegistry.defaultMetadata.title && seoRegistry.defaultMetadata.description),
  seoRegistry.canonicalBase ? "SEO metadata and canonical base are configured." : "SEO canonical base is not verified.",
);

const metadataFlag = createReadinessFlag(
  "Metadata",
  siteConfig.metadata.title ?? null,
  Boolean(siteConfig.metadata.title && siteConfig.metadata.description),
  siteConfig.metadata.title ? "Site metadata is configured." : "Site metadata is not verified.",
);

const openGraphFlag = createReadinessFlag(
  "OpenGraph",
  typeof seoRegistry.openGraphDefaults.title === "string" ? seoRegistry.openGraphDefaults.title : null,
  Boolean(seoRegistry.openGraphDefaults.title && seoRegistry.openGraphDefaults.description),
  seoRegistry.openGraphDefaults.title ? "OpenGraph defaults are configured." : "OpenGraph defaults are not verified.",
);

const twitterCardsFlag = createReadinessFlag(
  "Twitter Cards",
  typeof seoRegistry.twitterDefaults.title === "string" ? seoRegistry.twitterDefaults.title : null,
  Boolean(seoRegistry.twitterDefaults.title && seoRegistry.twitterDefaults.description),
  seoRegistry.twitterDefaults.title ? "Twitter card defaults are configured." : "Twitter card defaults are not verified.",
);

const robotsFlag = createReadinessFlag(
  "Robots",
  seoRegistry.robots ? "configured" : null,
  Boolean(seoRegistry.robots),
  seoRegistry.robots ? "Robots configuration is present." : "Robots configuration is not verified.",
);

const sitemapFlag = createReadinessFlag(
  "Sitemap",
  siteConfig.productionUrl ?? null,
  Boolean(siteConfig.productionUrl),
  siteConfig.productionUrl ? "Sitemap readiness depends on a verified production domain." : "Sitemap readiness is not verified.",
);

const securityFlag = createReadinessFlag(
  "Security",
  securityConfig.strictTransportSecurity,
  securityConfig.strictTransportSecurity && securityConfig.allowedOrigins.length > 0,
  securityConfig.strictTransportSecurity ? "Security defaults are configured." : "Security policy is not verified.",
);

const accessibilityFlag = createReadinessFlag(
  "Accessibility",
  accessibilityConfig.contrast.minimumRatio,
  accessibilityConfig.contrast.minimumRatio >= 4.5 && accessibilityConfig.semantics.altTextRequired,
  accessibilityConfig.semantics.altTextRequired ? "Accessibility defaults are configured." : "Accessibility defaults are not verified.",
);

const performanceFlag = createReadinessFlag(
  "Performance",
  performanceConfig.budgets.firstLoadKb,
  performanceConfig.imageOptimization.enabled && performanceConfig.caching.staticAssetsTtlSeconds > 0,
  performanceConfig.imageOptimization.enabled ? "Performance defaults are configured." : "Performance defaults are not verified.",
);

const analyticsFlag = createReadinessFlag(
  "Analytics",
  integrationRegistry.analytics.ga4MeasurementId ?? null,
  Boolean(integrationRegistry.analytics.ga4MeasurementId),
  integrationRegistry.analytics.ga4MeasurementId ? "Analytics measurement ID is present." : "Analytics measurement ID is not verified.",
);

const adsenseFlag = createReadinessFlag(
  "Adsense",
  integrationRegistry.analytics.adsensePublisherId ?? null,
  Boolean(integrationRegistry.analytics.adsensePublisherId),
  integrationRegistry.analytics.adsensePublisherId ? "Adsense publisher ID is present." : "Adsense publisher ID is not verified.",
);

const searchConsoleFlag = createReadinessFlag(
  "Search Console",
  integrationRegistry.searchConsole.verification ?? null,
  Boolean(integrationRegistry.searchConsole.verification),
  integrationRegistry.searchConsole.verification ? "Search Console verification value is present." : "Search Console verification value is not verified.",
);

const monitoringFlag = createReadinessFlag(
  "Monitoring",
  monitoringConfig.provider ?? null,
  monitoringConfig.enabled && monitoringConfig.provider !== null && Boolean(monitoringConfig.endpoint),
  monitoringConfig.enabled ? "Monitoring is configured." : "Monitoring is not verified.",
);

const errorReportingFlag = createReadinessFlag(
  "Error Reporting",
  errorReportingConfig.provider ?? null,
  errorReportingConfig.enabled && errorReportingConfig.provider !== null && Boolean(errorReportingConfig.endpoint),
  errorReportingConfig.enabled ? "Error reporting is configured." : "Error reporting is not verified.",
);

const readinessFlags: Record<string, DeploymentReadinessFlag> = {
  firebase: firebaseFlag,
  assetManifest: assetManifestFlag,
  assetRegistry: assetRegistryFlag,
  assetMapping: assetMappingFlag,
  seo: seoFlag,
  metadata: metadataFlag,
  openGraph: openGraphFlag,
  twitterCards: twitterCardsFlag,
  robots: robotsFlag,
  sitemap: sitemapFlag,
  security: securityFlag,
  accessibility: accessibilityFlag,
  performance: performanceFlag,
  analytics: analyticsFlag,
  adsense: adsenseFlag,
  searchConsole: searchConsoleFlag,
  monitoring: monitoringFlag,
  errorReporting: errorReportingFlag,
};

const blockers: string[] = [];
const warnings: string[] = [];

if (!siteConfig.productionUrl) {
  blockers.push("Production domain is not verified.");
}

if (!deploymentConfig.provider) {
  blockers.push("Deployment provider is not verified.");
}

if (!integrationRegistry.firebase.projectId) {
  warnings.push("Firebase deployment readiness is pending.");
}

if (!integrationRegistry.analytics.ga4MeasurementId) {
  warnings.push("Analytics deployment readiness is pending.");
}

if (!integrationRegistry.analytics.adsensePublisherId) {
  warnings.push("Adsense deployment readiness is pending.");
}

if (!integrationRegistry.searchConsole.verification) {
  warnings.push("Search Console deployment readiness is pending.");
}

const readinessCheckCount = Object.keys(readinessFlags).length;
const readyChecks = Object.values(readinessFlags).filter((flag) => flag.status === "ready").length;
const pendingChecks = Object.values(readinessFlags).filter((flag) => flag.status === "pending").length;
const blockedChecks = Object.values(readinessFlags).filter((flag) => flag.status === "blocked").length;
const completenessPercentage = readinessCheckCount > 0 ? Math.round((readyChecks / readinessCheckCount) * 100) : 0;
const readinessScore = completenessPercentage;

const deploymentStatus: DeploymentStatus = blockers.length > 0 ? "not-configured" : readinessScore >= 85 ? "ready" : "degraded";

export const deploymentValidation: DeploymentValidationConfig = {
  summary: {
    isValid: blockers.length === 0,
    issues: [
      ...blockers.map((message) => ({ field: "deployment", message, severity: "error" as const })),
      ...warnings.map((message) => ({ field: "deployment", message, severity: "warning" as const })),
    ],
    warnings,
    blockers,
    completenessPercentage,
    readyChecks,
    pendingChecks,
    blockedChecks,
  },
  diagnostics: {
    warnings,
    blockers,
  },
};

export const deploymentReadiness: DeploymentReadinessConfig = {
  flags: readinessFlags,
  score: readinessScore,
  readyChecks,
  pendingChecks,
  blockedChecks,
  complete: blockers.length === 0 && pendingChecks === 0,
  blockers,
  warnings,
};

export const deploymentHealth: DeploymentHealthConfig = {
  status: deploymentStatus,
  score: readinessScore,
  message: deploymentStatus === "ready"
    ? "Deployment configuration is verified for production readiness."
    : deploymentStatus === "degraded"
      ? "Deployment configuration is partially verified and requires additional checks."
      : "Deployment configuration is not ready for production.",
  lastVerified: runtimeMetadataConfig.buildTimestamp ?? null,
};

export const deploymentCapabilities: DeploymentCapabilitiesConfig = {
  imageOptimization: runtimeCapabilityConfig.imageOptimization,
  pwa: runtimeCapabilityConfig.pwa,
  offlineSupport: runtimeCapabilityConfig.offlineSupport,
  analyticsAvailable: runtimeCapabilityConfig.analyticsAvailable,
  adsenseAvailable: runtimeCapabilityConfig.adsenseAvailable,
  firebaseAvailable: runtimeCapabilityConfig.firebaseAvailable,
};

export const deploymentSecurity: DeploymentSecurityConfig = {
  strictTransportSecurity: securityConfig.strictTransportSecurity,
  allowedOrigins: securityConfig.allowedOrigins,
  referrerPolicy: securityConfig.referrerPolicy,
  sameSiteCookies: securityConfig.sameSiteCookies,
  contentSecurityPolicyConfigured: securityConfig.contentSecurityPolicy.defaultSrc.length > 0,
};

export const deploymentDomains: DeploymentDomainsConfig = {
  production: siteConfig.productionUrl,
  canonicalBase: seoRegistry.canonicalBase,
  verified: Boolean(siteConfig.productionUrl && seoRegistry.canonicalBase),
  allowedOrigins: securityConfig.allowedOrigins,
};

export const deploymentSsl: DeploymentSslConfig = {
  httpsEnforced: securityConfig.strictTransportSecurity,
  verified: Boolean(siteConfig.productionUrl && securityConfig.strictTransportSecurity),
  detail: siteConfig.productionUrl ? "HTTPS enforcement is configured in security policy." : "Production domain must be verified before SSL readiness can be confirmed.",
};

export const deploymentDns: DeploymentDnsConfig = {
  configured: Boolean(siteConfig.productionUrl),
  verified: Boolean(siteConfig.productionUrl),
  detail: siteConfig.productionUrl ? "DNS readiness depends on the confirmed production domain." : "DNS configuration is not verified.",
};

export const deploymentRollback: DeploymentRollbackConfig = {
  strategy: deploymentConfig.rollbackStrategy,
  verified: false,
  detail: "Rollback policy is not verified in the current deployment configuration.",
};

export const deploymentVersioning: DeploymentVersioningConfig = {
  buildVersion: deploymentMetadata.buildVersion,
  buildTimestamp: deploymentMetadata.buildTimestamp,
  releaseChannel: deploymentMetadata.releaseChannel,
  commitSha: deploymentMetadata.commitSha,
  versionSource: runtimeEnvironmentConfig.version ?? null,
};

export const deploymentVerification: DeploymentVerificationConfig = {
  providerVerified: deploymentProviderConfig.verified,
  domainVerified: Boolean(siteConfig.productionUrl),
  assetManifestVerified: assetManifestFlag.verified === true,
  assetRegistryVerified: assetRegistryFlag.verified === true,
  seoVerified: seoFlag.verified === true,
  securityVerified: securityFlag.verified === true,
  productionReadinessVerified: deploymentReadiness.score >= 80,
};

export const deploymentSummary: DeploymentSummaryConfig = {
  status: deploymentHealth.status,
  readinessScore: deploymentReadiness.score,
  completenessPercentage: deploymentValidation.summary.completenessPercentage,
  verifiedChecks: deploymentValidation.summary.readyChecks,
  pendingChecks: deploymentValidation.summary.pendingChecks,
  blockedChecks: deploymentValidation.summary.blockedChecks,
  blockers: deploymentValidation.summary.blockers,
  warnings: deploymentValidation.summary.warnings,
};

export const deployment = Object.freeze({
  config: deploymentConfig,
  metadata: deploymentMetadata,
  provider: deploymentProviderConfig,
  environment: deploymentEnvironmentConfig,
  validation: deploymentValidation,
  readiness: deploymentReadiness,
  health: deploymentHealth,
  capabilities: deploymentCapabilities,
  security: deploymentSecurity,
  domains: deploymentDomains,
  ssl: deploymentSsl,
  dns: deploymentDns,
  rollback: deploymentRollback,
  versioning: deploymentVersioning,
  verification: deploymentVerification,
  summary: deploymentSummary,
});
