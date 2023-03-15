import React from 'react';
import PropTypes from 'prop-types';
import { FriendItemStyles, FriendImg, FriendStatus } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyles>
      <FriendStatus className="status">{isOnline}</FriendStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItemStyles>
  );
};

FriendItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
};
