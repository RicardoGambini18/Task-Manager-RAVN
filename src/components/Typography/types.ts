import { ComponentType } from 'react'

// ThemeProps
export interface ThemeTypographyProps {
  fontSize: number
  lineHeight: number
  spacing: number
}

export interface ThemeAndroidSizeProps {
  XL: ThemeTypographyProps
  L: ThemeTypographyProps
  M: ThemeTypographyProps
  S: ThemeTypographyProps
  XS?: ThemeTypographyProps
}

export interface ThemeIOSSizeProps {
  L: ThemeTypographyProps
  M: ThemeTypographyProps
  S: ThemeTypographyProps
  XS: ThemeTypographyProps
}

export interface ThemeAndroidVariantProps {
  display: ThemeAndroidSizeProps
  body: ThemeAndroidSizeProps
}

export interface ThemeIOSVariantProps {
  largeTitle: ThemeIOSSizeProps
  title1: ThemeIOSSizeProps
  title2: ThemeIOSSizeProps
  title3: ThemeIOSSizeProps
  body: ThemeIOSSizeProps
  headline: ThemeIOSSizeProps
  subheadline: ThemeIOSSizeProps
}

export interface ThemeCompleteProps {
  android: ThemeAndroidVariantProps
  ios: ThemeIOSVariantProps
}

// Component Props
export interface SizeProps {
  android?: keyof ThemeAndroidSizeProps
  ios?: keyof ThemeIOSSizeProps
  desktop?: keyof ThemeAndroidSizeProps
}

export interface VariantProps {
  android?: keyof ThemeAndroidVariantProps
  ios?: keyof ThemeIOSVariantProps
  desktop?: keyof ThemeAndroidVariantProps
}

export interface StyledTypographyProps {
  variant?: VariantProps
  size?: SizeProps
  fontWeight?: number
  color?: string
}

export interface ComponentTypographyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: keyof JSX.IntrinsicElements | ComponentType<any>
  variant?: VariantProps
  size?: SizeProps
  fontWeight?: number
  color?: string
}
