import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import invitadosData from '../data/invitados.json';

const GuestContext = createContext();

export const useGuest = () => useContext(GuestContext);

export const GuestProvider = ({ children }) => {
  const { invitadoId } = useParams();
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    if (invitadoId && invitadosData[invitadoId]) {
      setGuest(invitadosData[invitadoId]);
    } else {
      setGuest(null);
    }
  }, [invitadoId]);

  return (
    <GuestContext.Provider value={{ guest, invitadoId }}>
      {children}
    </GuestContext.Provider>
  );
};
