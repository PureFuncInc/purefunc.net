import {sprinkles} from '$lib/styles/sprinkles.css';
import {style} from '@vanilla-extract/css';

export const wrapper = style([
  sprinkles({
    width: {
      mobile: '100vw',
      desktop: '1024px'
    }
  }), {
    height: '100%',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'center',
  }
])
