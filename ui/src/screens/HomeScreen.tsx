import React from 'react';
import { Button } from '../components/Button';
import styles from './HomeScreen.module.css';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className={styles.screen}>
      <h1 className={styles.title}>How can we help?</h1>
      
      <div className={styles.buttonGroup}>
        <Button onClick={() => onNavigate('flights')}>
          <span className={styles.emoji}>🛫</span>
          <span>FLIGHTS</span>
        </Button>
        
        <Button variant="secondary" disabled>
          <span className={styles.emoji}>🗺️</span>
          <span>MAP</span>
        </Button>
        
        <Button variant="secondary" disabled>
          <span className={styles.emoji}>ℹ️</span>
          <span>HELP</span>
        </Button>
      </div>
    </div>
  );
};