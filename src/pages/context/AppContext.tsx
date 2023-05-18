import { createContext, useContext, useState } from 'react';

interface AppContextProps {
  isLightMode: boolean;
  toggleMode: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <AppContext.Provider value={{ isLightMode, toggleMode }}>
      {children}
    </AppContext.Provider>
  );
};
