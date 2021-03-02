import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1.5rem 2rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
    margin-top: 3rem;
    line-height: 1.4;

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.25rem;
    font-weight: 600;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      margin: 1.5rem 0 1rem;
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      border: 0;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.main};
      transition: .1s ease;

      &[data-status="failed"] {
        background-color: ${({ theme }) => theme.colors.red};;
      }

      &[data-status="succeeded"] {
        background-color: ${({ theme }) => theme.colors.green};
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
