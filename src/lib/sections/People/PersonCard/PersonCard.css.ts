import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const card = style([sprinkles({
  backgroundColor: {
    lightMode: blacks[9],
    darkMode: blacks[7],
  }
}), {
  padding: '18px 12px',
  boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.15)',
}])

export const cardTitle = style({

})
