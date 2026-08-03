import { integrationRegistry } from "@/config/integrations";
import { siteConfig } from "@/config/site";

export interface FeatureFlagConfig {
  enablePwa: boolean;
  enableRuntimeOptimizations: boolean;
  enableAccessibilityEnhancements: boolean;
  enableAnalytics: boolean;
  enableSearchConsole: boolean;
  enableAdsense: boolean;
  enableErrorReporting: boolean;
  experimental: {
    aiAssistant: boolean;
    advancedSearch: boolean;
    darkMode: boolean;
  };
}

export const featureFlagConfig: FeatureFlagConfig = {
  enablePwa: false,
  enableRuntimeOptimizations: true,
  enableAccessibilityEnhancements: true,
  enableAnalytics: integrationRegistry.analytics.ga4MeasurementId !== null,
  enableSearchConsole: integrationRegistry.searchConsole.verification !== null,
  enableAdsense: integrationRegistry.analytics.adsensePublisherId !== null,
  enableErrorReporting: false,
  experimental: {
    aiAssistant: false,
    advancedSearch: false,
    darkMode: true,
  },
};

export const featureFlags = Object.freeze(featureFlagConfig);
