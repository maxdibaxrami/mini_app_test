import {  Steps } from '@telegram-apps/telegram-ui';
import { useEffect, useState, type FC } from 'react';
import { Page } from '@/components/Page.tsx';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';
import { SparklesText } from '@/components/sparkiText/sparkiText';
import LanguageStep from './steps/lagnuageStep';
import { useTranslation } from 'react-i18next';
import ProfileDataStep from './steps/profileData';

export const SignUpPage: FC = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0)

  const NextTab = () => {
    if(selectedTab === 10){
      return
    }
    setSelectedTab(selectedTab + 1)
  }

  const PreviousTab = () => {
    if(selectedTab === 0){
      return
    }
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
        


      <MainButton onClick={() => NextTab()} text={t('Next')}/>
      <SecondaryButton onClick={() => PreviousTab()} text={t('previous')} position='left'/>

    </Page>
  );
};
