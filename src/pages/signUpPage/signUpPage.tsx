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
    console.log(selectedTab)
    setSelectedTab(selectedTab + 1)
  }

  const PreviousTab = () => {
    console.log(selectedTab)
    setSelectedTab(selectedTab - 1)
  }

  useEffect(()=>{console.log(selectedTab)},[selectedTab])

  return (
    <Page back={false}>
      <div className='safe-area-top top-bar-height flex items-center justify-center'>
        <SparklesText text="Mull Mull" />
      </div>

        <Steps
          count={10}
          progress={5}
        />
        
        {selectedTab === 0 && <LanguageStep/>}
        {selectedTab === 1 && <ProfileDataStep/>}
        


      <MainButton disabled={selectedTab === 10} onClick={NextTab} text={t('Next')}/>
      <SecondaryButton disabled={selectedTab === 0} onClick={PreviousTab} text={t('previous')} position='left'/>

    </Page>
  );
};
