import { FC } from 'react';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';

import { useChallenges } from '../../contexts/ChallengesContext';

import { ProfileContainer } from './styles';

interface ProfileProps {
  toggleTheme: () => void;
}

const Profile: FC<ProfileProps> = ({ toggleTheme }) => {
  const { level } = useChallenges();
  const theme = useTheme();

  return (
    <ProfileContainer>
      <img src="https://github.com/jonathanpauluze.png" alt="Jonathan Pauluze" />
      <div>
        <strong>Jonathan Pauluze</strong>
        <div>
          <div>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </div>
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={10}
            handleDiameter={20}
            offColor={theme.colors.grayLine}
            onColor={theme.colors.textHighlight}
          />
        </div>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
