const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, '');

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
};

const getLuminance = (colorComponent: number) => {
  const component = colorComponent / 255;
  return component <= 0.03928
    ? component / 12.92
    : Math.pow((component + 0.055) / 1.055, 2.4);
};

const calculateLuminance = (r: number, g: number, b: number) => {
  return (
    0.2126 * getLuminance(r) +
    0.7152 * getLuminance(g) +
    0.0722 * getLuminance(b)
  );
};

const useTextColor = (backgroundColor: string): 'black' | 'white' => {
  let r: number, g: number, b: number;

  if (backgroundColor.startsWith('#')) {
    [r, g, b] = hexToRgb(backgroundColor);
  } else {
    const colorComponents = backgroundColor.match(/\d+\.?\d*/g)?.map(Number);
    if (!colorComponents || colorComponents.length < 3) {
      throw new Error('Invalid color format');
    }

    [r, g, b] = colorComponents;
  }

  const luminance = calculateLuminance(r, g, b);
  return luminance > 0.179 ? 'black' : 'white';
};

export default useTextColor;
