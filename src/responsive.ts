import { css } from 'styled-components'

export enum DeviceSizes {
  Mobile = '425px',
  Tablet = '768px',
  Laptop = '1440px',
  Desktop = '2560px',
}

export const responsive = (styles: any, size: DeviceSizes = DeviceSizes.Mobile) => {
  return css`
    @media (max-width: ${size}) {
      ${styles}
    }
  `
}
