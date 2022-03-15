import {style} from '@vanilla-extract/css'
import {responsiveBreakpoints, sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const logo = style({
  width: 160
})

export const navBar = style([sprinkles({
  width: {
    mobile: '100vw',
    desktop: '1024px'
  },
  backgroundColor: {
    lightMode: blacks[9],
    darkMode: blacks[1],
  }
}), {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.05)',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      top: 24,
      borderRadius: 12,
    }
  }
}])

export const navItem = style({
  listStyle: 'none',
  padding: '0 1.5rem'
})

export const link = style([sprinkles({
  color: {
    lightMode: blacks[1],
    darkMode: blacks[9],
  }
}), {
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: 'black'
    }
  },
}])

export const spacer = style({
  flex: 1
})
