import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../../hooks/use-local-storage';

export type UserDataType = {
  fullName: string;
  email: string;
  image: string;
  noOfTickets: number;
  ticketType: string;
  specialRequest?: string;
  currentStep: number;
};

// type TicketInforType = {
//   ticketType:string
//   noOfTickets:number
// }

export type AppContextType = {
  data: UserDataType | null;
  currentStep: number;
  totalSteps: number;
  uploadedImageUrl: string | null;
  setUploadedImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<UserDataType | null>(null);
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const { value, setValue } = useLocalStorage<UserDataType>('userData', {
    type: 'object',
  });
  const { value: tickets, setValue: setTickets } = useLocalStorage<
    UserDataType[]
  >('myTickets', {
    type: 'array',
  });

  useEffect(() => {
    if (value) {
      if (tickets) {
        setTickets([...tickets, value]);
      }
      setData(value);
      setCurrentStep(value.currentStep);
    } else {
      setTickets([]);
      const data = {
        fullName: '',
        email: '',
        image: '',
        noOfTickets: 0,
        ticketType: '',
        specialRequest: '',
        currentStep,
      };
      setData(data);
      setValue(data);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        currentStep,
        totalSteps,
        uploadedImageUrl,
        setUploadedImageUrl,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
