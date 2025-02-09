import { List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { Page } from '@/components/Page.tsx';
import MainButton from '@/lib/MainButton';
import SecondaryButton from '@/lib/SecondaryButton';

export const SignUpPage: FC = () => {

      
  return (
    <Page back={false}>
      <List>
            <h1>dsa</h1>
      </List>
      <MainButton text="primary"/>
      <SecondaryButton color="" text="secondory" position='left'/>
    </Page>
  );
};
