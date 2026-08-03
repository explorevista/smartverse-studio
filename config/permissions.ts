import { siteConfig } from "@/config/site";

export interface PermissionPolicy {
  requireAuthentication: boolean;
  roleBasedAccess: boolean;
  allowGuestAccess: boolean;
  defaultRole: "anonymous" | "viewer" | "editor" | "admin" | null;
  adminContact: string | null;
  auditLogging: boolean;
  rateLimitEnabled: boolean;
  rateLimitPerMinute: number | null;
}

export const permissionsConfig: PermissionPolicy = {
  requireAuthentication: false,
  roleBasedAccess: false,
  allowGuestAccess: true,
  defaultRole: "anonymous",
  adminContact: siteConfig.contact.email ?? null,
  auditLogging: false,
  rateLimitEnabled: false,
  rateLimitPerMinute: null,
};

export const permissions = Object.freeze({
  config: permissionsConfig,
});
