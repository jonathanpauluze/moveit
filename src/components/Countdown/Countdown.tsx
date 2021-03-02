import { FC } from 'react';
import { TimesIcon } from '../TimesIcon/TimesIcon';
import { useCountdown } from '../../contexts/CountdownContext';

import { CountdownContainer, CountdownButton } from './styles';

const Countdown: FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
          <img src="icons/check.svg" alt="Concluído" />
        </CountdownButton>
      ) : (
        <>
          { isActive ? (
            <CountdownButton
              type="button"
              data-active
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <TimesIcon />
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play.svg" alt="Iniciar" />
            </CountdownButton>
          ) }
        </>
      )}
    </>
  );
}

export default Countdown;
