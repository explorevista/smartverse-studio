import { runtimeEnvironmentConfig } from "@/config/environment";

export interface CacheConfig {
  enabled: boolean;
  strategy: "memory" | "redis" | "cdn" | "hybrid" | null;
  ttlSeconds: number | null;
  staleWhileRevalidateSeconds: number | null;
  bustOnDeploy: boolean;
  keyPrefix: string | null;
}

export const cacheConfig: CacheConfig = {
  enabled: true,
  strategy: runtimeEnvironmentConfig.isProduction ? "cdn" : "memory",
  ttlSeconds: runtimeEnvironmentConfig.isProduction ? 300 : null,
  staleWhileRevalidateSeconds: runtimeEnvironmentConfig.isProduction ? 60 : null,
  bustOnDeploy: true,
  keyPrefix: "smartverse-studio",
};

export const cache = Object.freeze({
  config: cacheConfig,
});
