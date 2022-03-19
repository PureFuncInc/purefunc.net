import {style} from '@vanilla-extract/css';
import {sprinkles} from '../lib/styles/sprinkles.css';
import {blacks} from '../lib/styles/colors';

export const wrapper = style({
  scrollSnapType: 'y mandatory',
  overflowY: 'scroll',
  height: '100vh',
  width: '100%',
})

export const backToTop = style([sprinkles({
  backgroundColor: {
    lightMode: blacks[0],
    darkMode: blacks[10],
  },
  color: {
    lightMode: blacks[10],
    darkMode: blacks[0],
  },
}), {
  transitionProperty: 'opacity',
  transitionDuration: '600ms',
  transitionTimingFunction: 'ease-in-out',
  position: 'fixed',
  bottom: 20,
  left: '50%',
  width: 50,
  height: 50,
  transform: 'translateX(-50%)',
  zIndex: 99,
  border: 'none',
  borderRadius: '50%',
}])
