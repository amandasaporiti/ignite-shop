import { createStitches } from '@stitches/react'

export const {
  config,
  globalCss,
  createTheme,
  keyframes,
  styled,
  theme,
  getCssText,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray700: '#2B2B30',
      gray500: '#8D8D99',
      gray300: '#C4C4CC',
      gray100: '#E1E1E1',

      green500: '#00875F',
      green300: '#00B37E',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
