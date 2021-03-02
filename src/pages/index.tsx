import { FC } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CountdownProvider } from '../contexts/CountdownContext';

import ExperienceBar from '../components/ExperienceBar/ExperienceBar'
import Profile from '../components/Profile/Profile'
import CompletedChallenges from '../components/CompletedChallenges/CompletedChallenges';
import Countdown from '../components/Countdown/Countdown';
import ChallengeBox from '../components/ChallengeBox/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  toggleTheme: () => void;
}

const Home: FC<HomeProps> = ({ level, currentExperience, completedChallenges, toggleTheme }) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div >
              <Profile toggleTheme={toggleTheme} />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges)
    }
  }
}

export default Home;
