import styled from '@emotion/styled';

import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  background-color: ${theme.color.greyScale[900]};
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
