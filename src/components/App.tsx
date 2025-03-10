import { useLaunchParams, miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import { useEffect } from 'react';
import FontHandller from '@/FontHandller';
import { initializeI18n } from '@/initializeI18n';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';



export function App() {

  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  

  useEffect(() => {

    const loadI18n = async () => {
      await initializeI18n();
      const currentLang = i18next.language;
      document.documentElement.lang = currentLang;
      document.documentElement.dir = ['ar', 'fa'].includes(currentLang) ? 'rtl' : 'ltr';
      FontHandller();

    };
    
    loadI18n();
    FontHandller();

    
  }, [i18next]);

  return (
    <I18nextProvider i18n={i18next}>
        <AppRoot
          appearance={isDark ? 'dark' : 'light'}
          platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
          <HashRouter>
            <Routes>
              {routes.map((route) => <Route key={route.path} {...route} />)}
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
          </HashRouter>
        </AppRoot>
    </I18nextProvider>
  );
}
