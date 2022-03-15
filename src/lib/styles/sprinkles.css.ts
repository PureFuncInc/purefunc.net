import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import {blacks} from './colors';

export const responsiveBreakpoints = {
  mobile: '',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
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
    fontSize: ['1rem', '1.6rem', '2.2rem', '2.8rem', '3.4rem', '4.0rem', '4.6rem', '5.2rem', '5.8rem', '6.4rem']
  },
  responsiveArray: [ 'mobile', 'tablet', 'desktop' ],
  shorthands: {},
})

const colorProperties = defineProperties({
  responsiveArray: [ 'lightMode', 'darkMode' ],
  properties: {
    color: blacks,
    backgroundColor: blacks,
  },
  shorthands: {},
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
