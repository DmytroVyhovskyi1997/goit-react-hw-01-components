import { Profile } from './profile/Profile';
import user from './profile/user.json';

import { Statistics } from './statics/Statistics';
import data from './statics/data.json';

import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends.json';

import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json';


export const App = () => {
  return (
    <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
    </div>
    
  );
};