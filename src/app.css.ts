import { globalStyle, style } from '@vanilla-extract/css'

globalStyle(
  'html, body',
  {
    fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
  },
)

globalStyle(
  'a',
  {
    textDecoration: 'none',
  }
)

export const main = style({
  margin: '0 auto',
})
