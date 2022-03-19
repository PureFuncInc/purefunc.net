import {style} from '@vanilla-extract/css';
import { responsiveBreakpoints, sprinkles } from '$lib/styles/sprinkles.css';
import { blacks } from '$lib/styles/colors';

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

export const cards = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridGap: '6px 6px',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    }
  }
})
