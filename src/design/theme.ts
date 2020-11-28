export const Fonts = {
  playFair: "Playfair Display",
  roboto: "Roboto",
}

export const Colors = {
  primary: "#000",
  secondary: "#fff",
  tertiary: "#A3A3A3",
}

const numbers = {
  xs: 340,
  sm: 500,
  md: 800,
  lg: 1280,
  xl: 1920,
}

type DeviceSize = "xs" | "sm" | "md" | "lg" | "xl"

const media = {
  up: (bp: DeviceSize) => `@media (min-width: ${numbers[bp]}px)`,
  down: (bp: DeviceSize) => `@media (max-width: ${numbers[bp]}px)`,
}

export const breakpoints = {
  ...numbers,
  ...media,
}
