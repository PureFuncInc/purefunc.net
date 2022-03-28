import { blacks, fadedBlacks } from "$lib/styles/colors";
import { sizes } from "$lib/styles/sizes";
import { sprinkles } from "$lib/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const card = style([sprinkles({
  backgroundColor: {
    lightMode: fadedBlacks[9],
    darkMode: fadedBlacks[1],
  },
  color: {
    lightMode: blacks[0],
    darkMode: blacks[10],
  }
}), {
  minHeight: '30vh',
  padding: 18,
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}])

export const cardTitle = style([
  sprinkles({
    fontSize: {
      mobile: sizes[1],
      desktop: sizes[4],
    },
  }),
  {
    textAlign: 'center',
  },
])
