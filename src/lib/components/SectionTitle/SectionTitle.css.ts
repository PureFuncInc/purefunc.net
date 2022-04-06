import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';
import {sizes} from '$lib/styles/sizes';

export const title = style([
  sprinkles({
    fontSize: {
      mobile: sizes[2],
      desktop: sizes[6],
    },
    marginBottom: {
      mobile: sizes[0],
      desktop: sizes[2],
    },
  }),
  {
    color: blacks[10],
    textAlign: 'center',
  },
])
