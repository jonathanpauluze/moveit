import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 992px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }

  section {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6.25rem;
    align-content: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
    }

    > div {
      @media (max-width: 768px) {
        width: 100%;
      }

      &:first-child {
        @media (max-width: 768px) {
          margin-top: 2rem;
        }
      }

      &:nth-child(2) {
        @media (max-width: 768px) {
          min-height: 400px;
          margin-bottom: 40px;
        }
      }
    }
  }
`;