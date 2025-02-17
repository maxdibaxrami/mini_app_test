import {  Steps } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { SparklesText } from '@/components/sparkiText/sparkiText';
import LanguageStep from './steps/lagnuageStep';
import { useTranslation } from 'react-i18next';
import ProfileDataStep from './steps/profileData';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';
import DateOfBirthStep from './steps/dateOfBirth';
import WorkAndEducationStep from './steps/workAndEducation';


export const SignUpPage = () => {

  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0)


  const PreviousTab = () => {
    console.log("Before PreviousTab:", selectedTab); // Log before update
    setSelectedTab((prevTab) => {
      console.log("After PreviousTab (updated):", prevTab - 1); // Log expected new value
      return prevTab - 1;
    });
  };

  const NextTab = () => {
    console.log("Before NextYab:", selectedTab); // Log before update
    setSelectedTab((prevTab) => {
      console.log("After NextYab (updated):", prevTab + 1); // Log expected new value
      return prevTab + 1;
    });
  };

  return (
    <Page back={true}>
      <div className='fixed w-full bg-black top-0'>
        <div className='safe-area-top top-bar-height flex items-center justify-center'>
          <SparklesText text="Mull Mull" />
        </div>
        <div >
          <Steps
            count={10}
            progress={selectedTab}
          />
        </div>
       </div>
        
        <div className='main-content-safe mt-6 '>
          {selectedTab === 0 && <LanguageStep/>}
          {selectedTab === 1 && <ProfileDataStep/>}
          {selectedTab === 2 && <DateOfBirthStep/>}
          {selectedTab === 3 && <WorkAndEducationStep/>}

          
          
        </div>

        
        <MainButton
          text={t('Next')}
          backgroundColor="#1FB6A8"
          textColor="#FFFFFF"
          hasShineEffect={true}
          isEnabled={true}
          isLoaderVisible={false}
          isVisible={true}
          onClick={NextTab}
        />

        <SecondaryButton
          text={t('previous')}
          backgroundColor="#000000"
          textColor="#FFFFFF"
          hasShineEffect={false}
          isEnabled={true}
          isLoaderVisible={false}
          isVisible={true}
          position="left"
          onClick={PreviousTab}
        />

    </Page>
  );
};
