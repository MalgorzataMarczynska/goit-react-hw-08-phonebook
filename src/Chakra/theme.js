import { extendTheme } from '@chakra-ui/react';
// const colors = {
//   brand: {
//     900: '#0000AA',
//     800: '#808080',
//     700: '#D3D3D3',
//     600: '#CFEBF7',
//     500: '#F0F8FF',
//     400: '#FFFFFF',
//   },
// };
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};
export const theme = extendTheme({ config });
