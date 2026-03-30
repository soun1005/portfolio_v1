import { createContext, useContext, useState } from 'react';
import type { Lang } from '@/locales/translations';

interface AppContextProps {
  isLightMode: boolean;
  toggleMode: () => void;
  lang: Lang;
  toggleLang: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [lang, setLang] = useState<Lang>('en');

  const toggleMode = () => setIsLightMode(!isLightMode);
  const toggleLang = () => setLang((l) => (l === 'en' ? 'fr' : 'en'));

  return (
    <AppContext.Provider value={{ isLightMode, toggleMode, lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
