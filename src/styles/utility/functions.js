import Color from "color";

export const fade = (color, opacity) => {
  return Color.rgb(color)
    .rgb()
    .fade(opacity)
    .string();
};

export const gradientWrapper = (
  color,
  theme,
  opacity,
  direction,
  gradientType
) => {
  let light = color && color.light ? color.light : theme.Light;
  let dark = color && color.dark ? color.dark : theme.Dark;
  return gradient(light, dark, opacity, direction, gradientType);
};

export const gradient = (light, dark, opacity, direction, gradientType) => {
  const gradient = gradientType || "linear-gradient";
  const result = `${gradient}(
    ${direction || "to right bottom"},
    ${opacity ? fade(light, opacity) : light},
    ${opacity ? fade(dark, opacity) : dark}
  )`;
  return result;
};
