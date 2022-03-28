import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const title = style([
  sprinkles({
    fontSize: {
      mobile: '2.2rem',
      desktop: '4.6rem'
    },
  }),
  {
    color: blacks[10],
    textAlign: 'center',
    marginBottom: 24,
  },
])
