import { FC } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';

import { ProfileContainer } from './styles';

const Profile: FC = () => {
  const { level } = useChallenges();

  return (
    <ProfileContainer>
      <img src="https://github.com/jonathanpauluze.png" alt="Jonathan Pauluze" />
      <div>
        <strong>Jonathan Pauluze</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
