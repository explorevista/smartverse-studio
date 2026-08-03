export interface PerformanceConfig {
  imageOptimization: {
    enabled: boolean;
    formats: string[];
    quality: number;
    maxWidth: number;
    maxHeight: number;
    lazyLoadingDefault: boolean;
    placeholderBlur: boolean;
  };
  caching: {
    staticAssetsTtlSeconds: number;
    pageRevalidateSeconds: number;
    ssgRevalidateSeconds: number;
  };
  budgets: {
    firstLoadKb: number;
    routeChunkKb: number;
  };
}

export const performanceConfig: PerformanceConfig = {
  imageOptimization: {
    enabled: true,
    formats: ["webp", "avif"],
    quality: 82,
    maxWidth: 2200,
    maxHeight: 1400,
    lazyLoadingDefault: true,
    placeholderBlur: true,
  },
  caching: {
    staticAssetsTtlSeconds: 31536000,
    pageRevalidateSeconds: 3600,
    ssgRevalidateSeconds: 86400,
  },
  budgets: {
    firstLoadKb: 180,
    routeChunkKb: 120,
  },
};

export const performance = Object.freeze(performanceConfig);
