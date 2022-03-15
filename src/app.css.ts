import { globalStyle, style } from '@vanilla-extract/css'

globalStyle(
  'html, body',
  {
    fontFamily: "'Open Sans', 'Helvetica Neue', sans-serif",
  },
)

export const main = style({
  margin: '0 auto',
})
