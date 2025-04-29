import chroma from 'chroma-js';

/**
 * Convert HEX to OKLCH.
 * @param hex - The HEX color value.
 * @returns The color in OKLCH format (oklch(l, c, h)).
 */
export const hexToOklch = (hex) => {
  const color = chroma(hex).oklch();
  return `oklch(${color[0]}, ${color[1]}, ${color[2]})`;
};

/**
 * Convert OKLCH to HEX.
 * @param oklch - The OKLCH color value (oklch(l, c, h)).
 * @returns The color in HEX format.
 */
export const oklchToHex = (oklch) => {
  const matches = oklch.match(/^oklch\((\d+\.*\d*),\s*(\d+\.*\d*),\s*(\d+\.*\d*)\)$/);
  if (!matches) throw new Error('Invalid OKLCH format');

  const [_, l, c, h] = matches.map(parseFloat);
  const color = chroma.oklch(l, c, h).hex();
  return color;
};
