import user from './dataJson/user.json';
import data from './dataJson/data.json';
import friends from "./dataJson/friends.json";
import transactions from "./dataJson/transactions.json";

import Container from './components/container';
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

export const Section = () => {
    return(
<div>
<Container title='Profile'>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</Container>
<Container title='Statistics'>
 <Statistics title="Upload stats" stats={data} />
 <Statistics stats={data} /> 
</Container>
<Container title='FriendList'>
 <FriendList friends={friends} />   
</Container>
<Container title='TransactionHistory'>
 <TransactionHistory items={transactions} />  
</Container>
</div>
    )
}
