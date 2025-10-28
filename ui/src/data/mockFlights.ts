export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  destination: string;
  gate: string;
  boardingTime: string;
  status: 'on-time' | 'delayed' | 'boarding';
}

export const mockFlights: Flight[] = [
  { id: '1', flightNumber: 'LH 123', airline: 'Lufthansa', destination: 'Frankfurt', gate: 'B12', boardingTime: '14:30', status: 'on-time' },
  { id: '2', flightNumber: 'LH 456', airline: 'Lufthansa', destination: 'Munich', gate: 'A5', boardingTime: '15:45', status: 'delayed' },
  { id: '3', flightNumber: 'FR 789', airline: 'Ryanair', destination: 'London', gate: 'C20', boardingTime: '16:15', status: 'on-time' },
  { id: '4', flightNumber: 'BA 234', airline: 'British Airways', destination: 'Paris', gate: 'B8', boardingTime: '17:00', status: 'boarding' },
  { id: '5', flightNumber: 'LH 567', airline: 'Lufthansa', destination: 'Berlin', gate: 'A12', boardingTime: '18:30', status: 'on-time' },
];