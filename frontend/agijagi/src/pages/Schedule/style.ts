import styled from '@emotion/styled';

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: scroll;
  padding: 0 1rem;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: scroll;
`;
