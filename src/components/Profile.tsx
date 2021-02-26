import { useChallenges } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jonathanpauluze.png" alt="Jonathan Pauluze" />
      <div>
        <strong>Jonathan Pauluze</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}