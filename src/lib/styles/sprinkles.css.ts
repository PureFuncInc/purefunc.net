import {createSprinkles, defineProperties} from '@vanilla-extract/sprinkles'
import {blacks, fadedBlacks} from './colors';
import {sizes} from './sizes'

export const responsiveBreakpoints = {
  mobile: '',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
}

export const colorBreakpoints = {
  lightMode: '',
  darkMode: '(prefers-color-scheme: dark)',
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': responsiveBreakpoints.tablet },
    desktop: { '@media': responsiveBreakpoints.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    width: [ '100vw', '1024px' ],
    fontSize: sizes,
    margin: sizes,
    marginTop: sizes,
    marginBottom: sizes,
  },
  responsiveArray: [ 'mobile', 'tablet', 'desktop' ],
  shorthands: {},
})

const colorProperties = defineProperties({
  responsiveArray: [ 'lightMode', 'darkMode' ],
  properties: {
    color: blacks,
    backgroundColor: [...blacks, ...fadedBlacks],
  },
  shorthands: {},
  conditions: {
    lightMode: {},
    darkMode: { '@media': colorBreakpoints.darkMode },
  },
  defaultCondition: 'darkMode',
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
