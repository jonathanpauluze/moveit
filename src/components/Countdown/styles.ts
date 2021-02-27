import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: var(--title);

  & > div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #F0F1F3;
      }

      &:last-child {
        border-left: 1px solid #F0F1F3;
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
  color: var(--white);
  background-color: var(--blue);
  transition: background-color .1s ease;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &:disabled {
    border-bottom: 4px solid var(--green);
    color: var(--text);
    background-color: var(--white);
    cursor: not-allowed;
  }

  img, svg {
    margin-left: 1rem;
  }

  &[data-active] {
    color: var(--title);
    background-color: var(--white);

    &:not(:disabled):hover {
      color: var(--white);
      background-color: var(--red);
    }
  }
`;
