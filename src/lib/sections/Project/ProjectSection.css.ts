import {style} from '@vanilla-extract/css';
import {sprinkles} from '$lib/styles/sprinkles.css';

export const strip = style([sprinkles({
  fontSize: {
    mobile: '2.2rem',
    desktop: '4.6rem',
  }
}), {
  width: '100%',
  fontWeight: 700,
  textAlign: 'center',
  backgroundColor: '#ffdb00',
  borderWidth: '120px 0',
  borderColor: 'black',
  borderStyle: 'dashed',
  position: 'absolute',
  top: '50%',
  lineHeight: '10rem',
  transform: 'translateY(-50%) scale(1.1) rotate(-5deg)',
}])
