import {style} from '@vanilla-extract/css';
import {responsiveBreakpoints} from '$lib/styles/sprinkles.css';

export const section = style({
  height: '100vh',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  transition: 'height 600ms ease-in-out',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
})

export const wrapper = style({
  zIndex: 2,
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '@media': {
    [responsiveBreakpoints.desktop]: {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  }
})

export const bg = style({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})

export const bgWrapper = style({
  height: '100%',
})
