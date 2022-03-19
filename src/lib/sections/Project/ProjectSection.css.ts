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

export const title = style([sprinkles({
    fontSize: {
      mobile: '2.2rem',
      desktop: '6.4rem',
    }
  }), {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundImage: 'linear-gradient(to top, #0000, #000F 50%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}])
