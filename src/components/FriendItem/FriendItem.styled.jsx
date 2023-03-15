import styled from '@emotion/styled';

const isOnline = props => {
  console.log(props)
  return props.children ? 'green' : 'red';
};

export const FriendItemStyles = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 24px;
  padding: 16px;
  width: 240px;
  background-color: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const FriendStatus = styled.span`
  display: block;
  background-color: ${isOnline};
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
export const FriendImg = styled.img`
  width: 100px;
  heigth: auto;
`;
