import React from "react";
import { number, string, shape } from 'prop-types';
import {
  ProfileWrap,
  ProfileImg,
  UserName,
  UserTag,
  Location,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './styled/Profile.styled';

export const Profile = ({ 
    username,
    tag,
    location,
    avatar,
    stats
 }) => {
    
    return (
        <ProfileWrap>
            <div className="description">
                <ProfileImg
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <Location>{location}</Location>
            </div>

            <Stats>
                <StatsItem>
                    <StatsLabel>Followers </StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views </StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes </StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </ProfileWrap>
    )
}

Profile.propTypes = {
    user:shape({
    username: string,
    tag: string,
    location: string,
    avatar: string,
    stats: {
    followers: number,
    views: number,
    likes: number,
    },
  })
};
