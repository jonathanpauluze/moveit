import { FC } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';

import { ExperienceBarContainer } from './styles';

const ExperienceBar: FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel; 

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
}

export default ExperienceBar;
