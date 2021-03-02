import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  > div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
      font-size: 1rem;

      > div {
        img {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;