import { List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';
import { SparklesText } from '@/components/sparkiText/sparkiText';

export const SignUpPage: FC = () => {

      
  return (
    <Page back={false}>
      <div className='safe-area-top top-bar-height'>
        <SparklesText text="Mull Mull" />
      </div>

      <List>
            <h1>dsa</h1>
      </List>

      <MainButton text="primary"/>
      <SecondaryButton color="" text="secondory" position='left'/>

    </Page>
  );
};
