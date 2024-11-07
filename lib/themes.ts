export type Theme = {
  name: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
};

export const themes: Record<string, Theme> = {
  sand: {
    name: 'sand',
    label: 'Sand',
    colors: {
      background: '48 38 28',
      foreground: '28 25 23',
      card: '44 34 24',
      cardForeground: '28 25 23',
      popover: '44 34 24',
      popoverForeground: '28 25 23',
      primary: '168 162 158',
      primaryForeground: '28 25 23',
      secondary: '54 44 34',
      secondaryForeground: '248 245 243',
      muted: '54 44 34',
      mutedForeground: '138 132 128',
      accent: '54 44 34',
      accentForeground: '248 245 243',
      destructive: '220 38 38',
      destructiveForeground: '248 245 243',
      border: '54 44 34',
      input: '54 44 34',
      ring: '168 162 158',
    },
  },
  mahogany: {
    name: 'mahogany',
    label: 'Mahogany',
    colors: {
      background: '58 28 28',
      foreground: '248 245 243',
      card: '64 34 34',
      cardForeground: '248 245 243',
      popover: '64 34 34',
      popoverForeground: '248 245 243',
      primary: '188 82 82',
      primaryForeground: '248 245 243',
      secondary: '74 44 44',
      secondaryForeground: '248 245 243',
      muted: '74 44 44',
      mutedForeground: '158 132 132',
      accent: '74 44 44',
      accentForeground: '248 245 243',
      destructive: '220 38 38',
      destructiveForeground: '248 245 243',
      border: '74 44 44',
      input: '74 44 44',
      ring: '188 82 82',
    },
  },
};