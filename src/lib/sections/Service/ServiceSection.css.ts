import {style} from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  height: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
})

export const caption = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
  height: '100%',
  paddingBottom: '4rem',
})
