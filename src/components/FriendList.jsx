import React from "react";
import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendItem,
  FriendImg,
} from './styled/FriendsList.styled';

export const FriendList = ({ friends }) => {
    return (
      <div className="friends-list__wrap">
        <FriendsList>
          {friends.map(friend => {
            const { avatar, name, isOnline, id } = friend;
            return (
              <FriendItem isOnline={isOnline} key={id}>
                <span class="status">{isOnline}</span>
                <FriendImg src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
              </FriendItem>
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