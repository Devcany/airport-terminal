import React, { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { FlightSearchScreen } from './screens/FlightSearchScreen';
import { mockFlights, type Flight } from './data/mockFlights';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setCurrentScreen('details');
  };

  return (
    <>
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={setCurrentScreen} />
      )}
      
      {currentScreen === 'flights' && (
        <FlightSearchScreen
          onBack={() => setCurrentScreen('home')}
          onSelectFlight={handleSelectFlight}
        />
      )}
      
      {currentScreen === 'details' && selectedFlight && (
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '48px',
          gap: '24px'
        }}>
          <div>Flight Details (coming next)</div>
          <div>{selectedFlight.flightNumber} to {selectedFlight.destination}</div>
          <button 
            onClick={() => setCurrentScreen('flights')}
            style={{ fontSize: '40px', padding: '20px 40px' }}
          >
            ← Back
          </button>
        </div>
      )}
    </>
  );
}

export default App;