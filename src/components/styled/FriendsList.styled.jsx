import styled from '@emotion/styled';

const isOnline = props => {
  return props.isOnline ? 'green' : 'red';
};

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: auto;
  font-size: 28px;
  font-weight: 500;
  width: 80%;
`;
export const FriendItem = styled.li`
  margin: 24px;
  border: 4px groove ${isOnline};
  padding: 16px;
  background-color: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const FriendStatus = styled.span`

`
export const FriendImg = styled.img`
  width:100px;
  heigth: auto;
`
