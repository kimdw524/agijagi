import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '../../../styles/theme';

import { Palette } from '../../../types/theme';

import { ButtonSize } from './Button.types';

const sizeStyle: Record<ButtonSize, SerializedStyles> = {
  sm: css`
    padding: 0.625rem 0.875rem;
    border-radius: 1.25rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 0.875rem 1.125rem;
    border-radius: 1.75rem;
    font-size: 1.25rem;
  `,
};

export const Button = styled.button<{
  fullWidth: boolean;
  backgroundColor: Palette;
  size: ButtonSize;
}>(
  (props) => css`
    ${sizeStyle[props.size]}
    position: relative;
    ${props.fullWidth &&
    css`
      width: 100%;
    `}
    margin-bottom: 0.1875rem;
    border: 0;
    background-color: ${theme.color[props.backgroundColor][500]};
    color: #fff;
    transition: all 0.1s ease;
    user-select: none;

    :enabled {
      cursor: pointer;

      :active {
        margin-top: 0.1875rem;
        margin-bottom: 0;

        ::before {
          top: -0.1875rem !important;
        }
      }
    }

    :disabled {
      background-color: ${theme.color[props.backgroundColor][200]};
    }

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0.1875rem 0.0625rem 0 ${theme.color.greyScale[400]};
      border-radius: inherit;
      transition: all 0.1s ease;
      z-index: -10;
      content: '';
    }
  `
);
