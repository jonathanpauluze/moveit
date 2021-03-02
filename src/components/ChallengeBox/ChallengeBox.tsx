import { FC } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';
import { useCountdown } from '../../contexts/CountdownContext';

import { ChallengeBoxContainer, ChallengeActive, ChallengeNotActive } from './styles';

const ChallengeBox: FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges();
  const { resetCountdown } = useCountdown();

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo desafio!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              data-status="failed"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              data-status="succeeded"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avançe de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}

export default ChallengeBox;
