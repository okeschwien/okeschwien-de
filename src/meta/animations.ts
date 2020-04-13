export const TIMING_FUNCTION_EASE_IN_OUT_QUART =
  'cubic-bezier(0.77, 0, 0.175, 1)' // From https://easings.netlify.com/

export const transitionTransform = (
  time: number | undefined = 0.4,
  timingFunction: string | undefined = TIMING_FUNCTION_EASE_IN_OUT_QUART
) => `transform ${time}s ${timingFunction}`

export const transitionColor = (
  time: number | undefined = 0.4,
  timingFunction: string | undefined = TIMING_FUNCTION_EASE_IN_OUT_QUART
): string => `color ${time}s ${timingFunction}`
