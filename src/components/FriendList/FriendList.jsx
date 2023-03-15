import React from 'react';
import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { FriendItem } from 'components/FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="friends-list__wrap">
      <FriendsList>
        {friends.map(friend => {
          return (
            <FriendItem key={friend.id}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}/>
          );
        })}
      </FriendsList>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.bool.isRequired,
    })
  ),
};
