export interface AccessibilityConfig {
  contrast: {
    minimumRatio: number;
    focusVisible: boolean;
    colorBlindFriendly: boolean;
  };
  motion: {
    respectReducedMotion: boolean;
    reducedMotionFallback: string;
  };
  semantics: {
    altTextRequired: boolean;
    landmarkRequired: boolean;
    keyboardNavigationRequired: boolean;
  };
}

export const accessibilityConfig: AccessibilityConfig = {
  contrast: {
    minimumRatio: 4.5,
    focusVisible: true,
    colorBlindFriendly: true,
  },
  motion: {
    respectReducedMotion: true,
    reducedMotionFallback: "reduce",
  },
  semantics: {
    altTextRequired: true,
    landmarkRequired: true,
    keyboardNavigationRequired: true,
  },
};

export const accessibility = Object.freeze(accessibilityConfig);
