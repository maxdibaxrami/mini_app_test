import {  Steps } from '@telegram-apps/telegram-ui';
import { useEffect, useState, type FC } from 'react';
import { Page } from '@/components/Page.tsx';
import { SparklesText } from '@/components/sparkiText/sparkiText';
import LanguageStep from './steps/lagnuageStep';
import { useTranslation } from 'react-i18next';
import ProfileDataStep from './steps/profileData';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';

export const SignUpPage: FC = () => {

  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0)

  const NextTab = () => {
    console.log("Before NextTab:", selectedTab); // Log before update
    setSelectedTab((prevTab) => {
      console.log("After NextTab (updated):", prevTab + 1); // Log expected new value
      return prevTab + 1;
    });
  };
  
  const PreviousTab = () => {
    console.log("Before PreviousTab:", selectedTab); // Log before update
    setSelectedTab((prevTab) => {
      console.log("After PreviousTab (updated):", prevTab - 1); // Log expected new value
      return prevTab - 1;
    });
  };

  useEffect(()=>{console.log(selectedTab)},[selectedTab])

  return (
    <Page back={false}>
      <div className='safe-area-top top-bar-height flex items-center justify-center'>
        <SparklesText text="Mull Mull" />
      </div>

        <Steps
          count={10}
          progress={selectedTab}
        />
        
        {selectedTab === 0 && <LanguageStep/>}
        {selectedTab === 1 && <ProfileDataStep/>}
        


      <MainButton 
        disabled={selectedTab >= 10} // Prevent exceeding 10
        onClick={NextTab} 
        text={t('Next')} 
      />

      <SecondaryButton 
        disabled={selectedTab <= 0} // Prevent going below 0
        onClick={PreviousTab} 
        text={t('Previous')} 
        position="left" 
      />
    </Page>
  );
};
