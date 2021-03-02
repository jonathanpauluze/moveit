import styled from 'styled-components';

export const CompletedChallengesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  font-weight: 500;

  span {
    &:first-child {
      font-size: 1.25rem;
    }

    &:last-child {
      font-size: 1.5rem;
    }
  }
`;