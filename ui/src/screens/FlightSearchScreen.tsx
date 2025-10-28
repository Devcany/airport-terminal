import React, { useState } from 'react';
import type { Flight } from '../data/mockFlights';
import { mockFlights } from '../data/mockFlights';
import styles from './FlightSearchScreen.module.css';

interface FlightSearchScreenProps {
  onBack: () => void;
  onSelectFlight: (flight: Flight) => void;
}

export const FlightSearchScreen: React.FC<FlightSearchScreenProps> = ({ onBack, onSelectFlight }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlights = mockFlights.filter(flight =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  return (
    <div className={styles.screen}>
      <button className={styles.backButton} onClick={onBack}>
        ← Back
      </button>

      <h1 className={styles.title}>Find your flight</h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="LH 123"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
      </div>

      <div className={styles.results}>
        {searchTerm && filteredFlights.length === 0 && (
          <div className={styles.noResults}>No flights found</div>
        )}

        {filteredFlights.map((flight) => (
          <div
            key={flight.id}
            className={styles.resultCard}
            onClick={() => onSelectFlight(flight)}
          >
            <div className={styles.flightInfo}>
              <div className={styles.flightNumber}>{flight.flightNumber}</div>
              <div className={styles.destination}>{flight.destination}</div>
            </div>
            <div className={styles.gateInfo}>
              <div className={styles.gate}>Gate {flight.gate}</div>
              <div className={`${styles.status} ${styles[flight.status]}`}>
                {flight.status === 'on-time' ? '✓ On Time' : 
                 flight.status === 'delayed' ? '⚠️ Delayed' : 
                 '🔔 Boarding'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};