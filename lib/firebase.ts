// ============================================================================
// lib/firebase.ts
// SMART VERSE STUDIO — FIREBASE CLIENT INFRASTRUCTURE (PRODUCTION)
// ----------------------------------------------------------------------------
// Singleton Firebase client for the Smart Verse Hub project.
// Next.js App Router compatible — safe for Server Components (no analytics
// or client SDK calls run during SSR unless explicitly invoked in the browser).
//
// Configuration source: config/firebase.ts (single source of truth).
// ============================================================================

import { getApps, getApp, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { isSupported, getAnalytics, type Analytics } from "firebase/analytics";
import { firebaseConfig } from "@/config/firebase";

// ----------------------------------------------------------------------------
// SINGLETON APP INITIALIZATION
// ----------------------------------------------------------------------------

const firebaseApp: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// ----------------------------------------------------------------------------
// AUTHENTICATION
// ----------------------------------------------------------------------------

const auth: Auth = getAuth(firebaseApp);

// ----------------------------------------------------------------------------
// FIRESTORE
// ----------------------------------------------------------------------------

const firestore: Firestore = getFirestore(firebaseApp);

// ----------------------------------------------------------------------------
// STORAGE
// ----------------------------------------------------------------------------

const storage: FirebaseStorage = getStorage(firebaseApp);

// ----------------------------------------------------------------------------
// ANALYTICS — BROWSER-ONLY, SSR-SAFE
// ----------------------------------------------------------------------------

let analyticsInstance: Analytics | null = null;

/**
 * Lazily initializes Firebase Analytics.
 * Must only be called from Client Components, never during SSR.
 * Returns null on the server or in unsupported browsers.
 */
export async function initializeAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return null;
  }

  if (analyticsInstance) {
    return analyticsInstance;
  }

  const supported = await isSupported();
  if (!supported) {
    return null;
  }

  analyticsInstance = getAnalytics(firebaseApp);
  return analyticsInstance;
}

// ----------------------------------------------------------------------------
// ENTERPRISE SERVICE REGISTRY
// ----------------------------------------------------------------------------

export const firebaseServices = {
  app: firebaseApp,
  auth,
  firestore,
  storage,
  initializeAnalytics,
} as const;

// ----------------------------------------------------------------------------
// NAMED EXPORTS
// ----------------------------------------------------------------------------

export { firebaseApp, auth, firestore, storage };

// ----------------------------------------------------------------------------
// DEFAULT EXPORT
// ----------------------------------------------------------------------------

export default firebaseServices;
