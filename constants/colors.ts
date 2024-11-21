const colors = {
  SkyBluePrimary: "#AFE3EF",
  GreenPrimary: "#40CAA0",
  GreenBacking: "#38B38E",
  LightBrown: "#FFF1E1",
  LightBrownBacking: "#D9C7B4",
  RegularBrown: "#F3C68E",
  RegularBrownBacking: "#C9A373",
  BrownText: "#9E6329",
  PurplePrimary: "#BF8EFF",
  PurpleBacking: "#A57CDA",
  WhiteText: "#FFFFFF",
  BlackText: "#282828",
  BrightGreen: "#8EDE0F",
  BrightGreenBacking: "#79CB00",
  BluePrimary: "#68AFFF",
  BluePrimaryBacking: "#518ED2",
  WhiteBacking: "#D9D9D9",
  PrimaryRed: "#E6433A",
} as const;

export type Colors = typeof colors; // Extract the type for the colors object
export default colors;
