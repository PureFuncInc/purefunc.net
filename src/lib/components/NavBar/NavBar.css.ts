import {style} from '@vanilla-extract/css'
import {colorBreakpoints, responsiveBreakpoints, sprinkles} from '$lib/styles/sprinkles.css';
import {blacks} from '$lib/styles/colors';

export const logo = style({
  flexBasis: '100%',
  flexGrow: 0,
  flexShrink: 0,
  height: 25,
  marginBottom: 24,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  '@media': {
    [colorBreakpoints.lightMode]: {
      backgroundImage: "url('/images/$_purefunc_black.svg')",
    },
    [colorBreakpoints.darkMode]: {
      backgroundImage: "url('/images/$_purefunc_white.svg')",
    },
    [responsiveBreakpoints.desktop]: {
      flexBasis: 160,
      height: 50,
      marginBottom: 0,
    }
  }
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
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.05)',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      top: 24,
      borderRadius: 12,
      flexWrap: 'nowrap',
    }
  }
}])

export const navItem = style({
  listStyle: 'none',
  padding: '0 .5rem'
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
  flex: 0,
  '@media': {
    [responsiveBreakpoints.desktop]: {
      flex: 1,
    }
  }
})
