import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const container = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const h1 = style([sprinkles({
  color: {
    lightMode: blacks[1],
    darkMode: blacks[10],
  },
  fontSize: {
    mobile: '2.8rem',
    desktop: '5.8rem'
  }
})])

export const h2 = style([sprinkles({
  color: {
    lightMode: blacks[1],
    darkMode: blacks[10],
  },
  fontSize: {
    mobile: '1.6rem',
    desktop: '2.2rem'
  }
})])
