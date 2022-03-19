import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const card = style([sprinkles({
  backgroundColor: {
    lightMode: blacks[9],
    darkMode: blacks[1],
  },
  color: {
    lightMode: blacks[0],
    darkMode: blacks[10],
  }
}), {
  padding: '18px 12px',
  boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: 6,
}])

export const cardTitle = style({
  textAlign: 'center',
})
