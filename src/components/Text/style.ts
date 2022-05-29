import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;
const handleColorGradient = (colors: any) => {
  console.log('colors', colors)
  if (typeof colors === 'object' && colors.length > 0) {
      return colors.reduce((acc: string, cur: string) => `${acc}, ${cur}`);
  }
  console.log('colors', colors)
  let splited = colors.split(',');
  if (splited.length == 1) return `${splited[0]}, ${splited[0]}`; 
  console.log('colors', colors)
  return colors.split(',').reduce((acc: string, cur: string) => `${acc}, ${cur}`)
}

const handleH = (h: number) => {
  switch (h) {
    case 1:
      return css`
        font-size: 47pt;
        font-weight: bolder;
      `;
    case 2:
      return css`
        font-size: 27pt;
        font-weight: 600;
      `;
    case 3:
      return css`
        font-size: 17pt;
        font-weight: normal;
      `
    case 4:
      return css`
        font-size: 7pt;
        font-weight: normal;
      `
    default:
      return css`
        font-size: 18pt;
        font-weight: normal;
      ` 
  }
}

export const Text = styled.h1`
  ${({ colors, h, align, width }: { colors: string, h: number, align: string, width: any }) => css`
  background: -webkit-linear-gradient(${ handleColorGradient(colors) });
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${handleH(h)};
  width: ${width};
  text-align: ${ align };
  padding: 2% 16%;
  `}
`;
