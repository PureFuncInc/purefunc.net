import {style} from '@vanilla-extract/css'
import {colorBreakpoints, responsiveBreakpoints, sprinkles} from '$lib/styles/sprinkles.css';
import {blacks, fadedBlacks} from '$lib/styles/colors';

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
      flexBasis: 50,
      width: 120,
      marginBottom: 0,
    }
  }
})

export const navBar = style([sprinkles({
  width: {
    mobile: '100vw',
  },
  backgroundColor: {
    lightMode: fadedBlacks[9],
    darkMode: fadedBlacks[1],
  }
}), {
  position: 'absolute',
  padding: 16,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100,
  boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.05)',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      top: '50%',
      left: '2vw',
      width: 160,
      transform: 'translateY(-50%)',
      flexDirection: 'column',
      borderRadius: 16,
    },
  },
}])

export const navItem = style({
  listStyle: 'none',
  padding: '0 .5rem 0 1rem',
  position: 'relative',
  '@media': {
    [responsiveBreakpoints.desktop]: {
      margin: '2rem 0',
    },
    [responsiveBreakpoints.mobile]: {
      margin: 0,
    },
    [colorBreakpoints.lightMode]: {
      selectors: {
        '&:before': {
          backgroundColor: '#0008',
        }
      }
    },
    [colorBreakpoints.darkMode]: {
      selectors: {
        '&:before': {
          backgroundColor: '#FFF8',
        }
      }
    },
  },
  selectors: {
    '&:before': {
      content: '',
      width: 8,
      height: 8,
      position: 'absolute',
      top: '50%',
      left: 0,
      borderRadius: '50%',
      transform: 'translateY(-50%)'
    },
  },
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
