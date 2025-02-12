import { List, Steps } from '@telegram-apps/telegram-ui';
import { type FC } from 'react';
import { Page } from '@/components/Page.tsx';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';
import { SparklesText } from '@/components/sparkiText/sparkiText';
import LanguageStep from './steps/lagnuageStep';

export const SignUpPage: FC = () => {
  

  return (
    <Page back={false}>
      <div className='safe-area-top top-bar-height flex items-center justify-center'>
        <SparklesText text="Mull Mull" />
      </div>

      <List>
        <Steps
          count={10}
          progress={5}
        />
        
        <LanguageStep/>

      </List>

      <MainButton text="primary"/>
      <SecondaryButton color="" text="secondory" position='left'/>

    </Page>
  );
};
