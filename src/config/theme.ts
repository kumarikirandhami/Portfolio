export type ThemeType = 'blue' | 'purple' | 'green';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}

export const themes: Record<ThemeType, Theme> = {
  blue: {
    light: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      accent: 'bg-blue-400',
      background: 'bg-white',
      text: 'text-blue-800'
    },
    dark: {
      primary: 'bg-blue-500',
      secondary: 'bg-blue-900',
      accent: 'bg-blue-400',
      background: 'bg-gray-900',
      text: 'text-blue-100'
    }
  },
  purple: {
    light: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-100',
      accent: 'bg-purple-400',
      background: 'bg-white',
      text: 'text-purple-800'
    },
    dark: {
      primary: 'bg-purple-500',
      secondary: 'bg-purple-900',
      accent: 'bg-purple-400',
      background: 'bg-gray-900',
      text: 'text-purple-100'
    }
  },
  green: {
    light: {
      primary: 'bg-green-600',
      secondary: 'bg-green-100',
      accent: 'bg-green-400',
      background: 'bg-white',
      text: 'text-green-800'
    },
    dark: {
      primary: 'bg-green-500',
      secondary: 'bg-green-900',
      accent: 'bg-green-400',
      background: 'bg-gray-900',
      text: 'text-green-100'
    }
  }
}; 