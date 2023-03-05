import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
      {friends.map(({id,avatar,isOnline,name}) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        ></FriendListItem>
      ))}
    </ul>
  )

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }.isRequired)
    ).isRequired,
  };