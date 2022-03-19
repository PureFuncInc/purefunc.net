import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const wrapper = style([sprinkles({
  width: {
    mobile: '100vw',
    desktop: '1024px',
  },
}), {
  height: '100%',
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
}])

export const ul = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const li = style([sprinkles({
  backgroundColor: {
    lightMode: blacks[9],
    darkMode: blacks[1],
  }
}), {
  minWidth: '20vw',
  marginBottom: 12,
  padding: '12px 18px',
}])

export const link = style([sprinkles({
  color: {
    lightMode: blacks[0],
  }
}), {
  color: blacks[10],
  display: 'flex',
  alignItems: 'center',
}])

export const icon = style([sprinkles({
  color: {
    darkMode: blacks[10],
    lightMode: blacks[0],
  }
}), {
  fill: blacks[10],
  width: '2rem',
  marginRight: '1rem',
}])
