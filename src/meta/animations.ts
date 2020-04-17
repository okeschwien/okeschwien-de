export const TIMING_FUNCTION_EASE_IN_OUT_QUART =
  'cubic-bezier(0.77, 0, 0.175, 1)' // From https://easings.netlify.com/

export const TIMING_FUNCTION_MATERIAL = 'cubic-bezier(.25,.8,.25,1)'

export const TIME_MATERIAL = 0.3

export const transitionTransform = (
  time: number | undefined = TIME_MATERIAL,
  timingFunction: string | undefined = TIMING_FUNCTION_MATERIAL
) => `transform ${time}s ${timingFunction}`

export const transitionColor = (
  time: number | undefined = TIME_MATERIAL,
  timingFunction: string | undefined = TIMING_FUNCTION_MATERIAL
): string => `color ${time}s ${timingFunction}`

export const transitionBoxShadow = (
  time: number | undefined = TIME_MATERIAL,
  timingFunction: string | undefined = TIMING_FUNCTION_MATERIAL
): string => `box-shadow ${time}s ${timingFunction}`

export const transitionAll = (
  time: number | undefined = TIME_MATERIAL,
  timingFunction: string | undefined = TIMING_FUNCTION_MATERIAL
): string => `all ${time}s ${timingFunction}`
