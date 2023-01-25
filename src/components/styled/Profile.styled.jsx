import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 400px;
  margin: auto;
  font-size: 20px;
  font-family: sans-serif;
  box-shadow: ${props => props.theme.shadows.medium};
`;

export const ProfileImg = styled.img`
  max-width: 50%;
  margin: auto;
  padding: 15px;
  border-radius: 50%;
  border: 1px grey outset;
`;

export const UserName = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 700;
`;
export const UserTag = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 4px;
  margin-top: 8px;
  font-family: fangsong;
`;

export const Location = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 12px;
  font-family: fangsong;
`;

export const Stats = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 12px 8px 4px 8px;
  background-color: ${props => props.theme.colors.gray};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const StatsLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 0 10px;
  color: ${props => props.theme.colors.light};
  font-size: 14px;
`;

export const StatsQuantity = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 0 10px;
  font-weight: 700;
  font-family: fangsong;
`;