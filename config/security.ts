import { siteConfig } from "@/config/site";

export interface SecurityConfig {
  strictTransportSecurity: boolean;
  allowedOrigins: string[];
  referrerPolicy: "strict-origin-when-cross-origin" | "no-referrer";
  sameSiteCookies: "lax" | "strict" | "none";
  contentSecurityPolicy: {
    defaultSrc: string[];
    scriptSrc: string[];
    styleSrc: string[];
    imgSrc: string[];
    connectSrc: string[];
    fontSrc: string[];
    objectSrc: string[];
    baseUri: string[];
    formAction: string[];
    frameAncestors: string[];
  };
}

export const securityConfig: SecurityConfig = {
  strictTransportSecurity: true,
  allowedOrigins: siteConfig.productionUrl ? [siteConfig.productionUrl] : [],
  referrerPolicy: "strict-origin-when-cross-origin",
  sameSiteCookies: "lax",
  contentSecurityPolicy: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'"],
    fontSrc: ["'self'", "https:"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'self'"],
  },
};

export const security = Object.freeze(securityConfig);
