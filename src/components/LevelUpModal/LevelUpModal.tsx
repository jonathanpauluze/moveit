import { FC, MouseEvent } from 'react';
import { useChallenges } from '../../contexts/ChallengesContext';

import { LevelUpModalOverlay, LevelUpModalContainer } from './styles';

const LevelUpModal: FC = () => {
  const { level, closeLevelUpModal } = useChallenges();

  const handleOverlayClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeLevelUpModal();
    }

    return;
  };

  return (
    <LevelUpModalOverlay onClick={handleOverlayClick}>
      <LevelUpModalContainer>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </LevelUpModalContainer>
    </LevelUpModalOverlay>
  );
}

export default LevelUpModal;
