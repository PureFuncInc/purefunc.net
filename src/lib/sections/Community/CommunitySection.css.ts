import { style } from "@vanilla-extract/css";
import {sprinkles} from '$lib/styles/sprinkles.css';

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

export const image = style({
  width: '100%',
  height: '35vh',
  objectFit: 'contain',
  objectPosition: 'center',
})
