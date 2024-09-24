import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;

  :nth-of-type(3n + 1) {
    background-color: ${theme.color.primary[700]};
  }

  :nth-of-type(3n + 2) {
    background-color: ${theme.color.secondary[700]};
  }

  :nth-of-type(3n + 3) {
    background-color: ${theme.color.tertiary[700]};
  }

  :active {
    transform: translateY(0.25rem);
    filter: brightness(90%);
  }
`;
