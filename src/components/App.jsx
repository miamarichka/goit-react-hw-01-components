import user from '../data/user.json';
import { Profile } from './Profile/Profile';

import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

const theme = {
  colors: {
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
  },
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  task: {
    display: 'block',
    textAlign: 'center',
    margin: '32px',
  },
};

const Task = styled.h2`
  display: ${props => props.theme.task.display};
  text-align: ${props => props.theme.task.textAlign};
  margin: ${props => props.theme.task.margin};
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Task>Task1</Task>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Task>Task2</Task>
      <Statistics title="Upload stats" stats={data} />

      <Task>Task3</Task>
      <FriendList friends={friends} />

      <Task>Task4</Task>
      <TransactionHistory items={transactions} />
    </ThemeProvider>
  );
};
