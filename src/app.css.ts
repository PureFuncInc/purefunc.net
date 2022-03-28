import { globalStyle } from '@vanilla-extract/css'

globalStyle(
  'html, body',
  {
    backgroundColor: 'black',
    fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
  },
)

globalStyle(
  'a',
  {
    textDecoration: 'none',
  }
)

globalStyle(
  'main', {
    margin: '0 auto',
  }
)
