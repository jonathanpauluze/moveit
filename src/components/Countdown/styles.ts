import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  & > div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${({theme}) => theme.colors.background};
      }

      &:last-child {
        border-left: 1px solid ${({theme}) => theme.colors.background};
      }
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border: 0;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color .1s ease;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }

  &:disabled {
    border-bottom: 4px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.main};
    cursor: not-allowed;
  }

  img, svg {
    margin-left: 1rem;
  }

  &[data-active] {
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.main};

    &:not(:disabled):hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.red};;
    }
  }
`;
