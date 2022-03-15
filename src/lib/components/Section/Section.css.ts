import {style} from '@vanilla-extract/css';
import {backgroundImage} from '$lib/styles/vars.css';
import {responsiveBreakpoints} from '$lib/styles/sprinkles.css';

export const section = style({
  height: '100vh',
  width: '100%',
  backgroundImage: backgroundImage,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  animation: 'height 600ms ease-in-out'
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

export const backgroundVideo = style({
  height: '100%',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)'
})
