import { FC } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';

import { CompletedChallengesContainer } from './styles';

const CompletedChallenges: FC = () => {
  const { completedChallenges } = useChallenges();

  return (
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </CompletedChallengesContainer>
  );
}

export default CompletedChallenges;
