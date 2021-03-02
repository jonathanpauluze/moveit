import styled from 'styled-components';

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 4px;
    margin: 0 1.5rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.grayLine};

    > div {
      height: 4px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.green};
    }

    span {
      position: absolute;
      top: -25px;
      transform: translateX(-50%);
    }
  }
`;
