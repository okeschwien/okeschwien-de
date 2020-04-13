export const BREAKPOINTS = { desktop: 48 }

export const mediaQueryDesktop = `@media (min-width: ${BREAKPOINTS.desktop}rem)`

export const isMobileViewport = (): boolean =>
  document.body.clientWidth < BREAKPOINTS.desktop * 16
