import {style} from '@vanilla-extract/css';
import {responsiveBreakpoints, sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const card = style([sprinkles({
  backgroundColor: {
    lightMode: blacks[9],
    darkMode: blacks[1],
  },
  color: {
    lightMode: blacks[0],
    darkMode: blacks[10],
  }
}), {
  padding: 18,
  boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: 6,
  display: 'grid',
  height: '100%',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '50% 1fr 2fr',
  gap: '1rem',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: '50% 1fr',
    },
  },
}])

export const cardAvatar = style({
  gridArea: '1 / 1 / 2 / 2',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      gridArea: '1 / 1 / 3 / 2',
    },
  },
})

export const avatarImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 6,
})

export const cardTitle = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gridArea: '2 / 1 / 3 / 2',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      gridArea: '1 / 2 / 2 / 3',
    },
  },
})

export const cardContent = style({
  gridArea: '3 / 1 / 4 / 2',
  overflow: 'hidden',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      gridArea: '2 / 2 / 3 / 3',
    },
  },
})
