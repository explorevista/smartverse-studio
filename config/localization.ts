import { runtimeEnvironmentConfig } from "@/config/environment";

export interface LocalizationConfig {
  defaultLocale: string | null;
  supportedLocales: string[];
  fallbackLocale: string | null;
  timezone: string | null;
  currency: string | null;
  dateFormat: string | null;
  direction: "ltr" | "rtl" | null;
}

export const localizationConfig: LocalizationConfig = {
  defaultLocale: runtimeEnvironmentConfig.defaultLocale,
  supportedLocales: [],
  fallbackLocale: null,
  timezone: runtimeEnvironmentConfig.timezone,
  currency: null,
  dateFormat: null,
  direction: null,
};

export const localization = Object.freeze({
  config: localizationConfig,
});
