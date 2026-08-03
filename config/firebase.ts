// config/firebase.ts
// Verified Firebase project configuration for Smart Verse Studio.
// This stores the config only — actual Firebase initialization
// (Auth, Firestore) happens in a separate, later integration step.

export const firebaseConfig = {
  apiKey: "AIzaSyBlEMMkJXSu4SI1vafFL5q6A-7aEapVS-4",
  authDomain: "smart-verse-hub.firebaseapp.com",
  projectId: "smart-verse-hub",
  storageBucket: "smart-verse-hub.firebasestorage.app",
  messagingSenderId: "301299884947",
  appId: "1:301299884947:web:b1b63ee785cc2e7b7bbe66",
  measurementId: "G-NEHQMQBXGK",
};

export const firebaseProjectInfo = {
  projectName: "Smart Verse Hub",
  projectNumber: "301299884947",
  supportEmail: "muhammadalikn53@gmail.com",
  authProviders: ["password", "google.com"] as const,
};
