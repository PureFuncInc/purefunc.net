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
  fontSize: {
    mobile: '2.8rem',
    desktop: '5.8rem'
  }
}), {
  color: blacks[10],
}])

export const h2 = style([sprinkles({
  fontSize: {
    mobile: '1.6rem',
    desktop: '2.2rem'
  }
}), {
  color: blacks[10],
}])
