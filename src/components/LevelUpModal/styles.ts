import styled from 'styled-components';

export const LevelUpModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(242, 243, 245, 0.8);
`;

export const LevelUpModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border: 0;
    font-size: 0;
    background: transparent;
  }
`;
