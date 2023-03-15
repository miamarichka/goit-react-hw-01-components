import styled from '@emotion/styled';

function randomInteger() {
  return Math.floor(Math.random() * (260));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

const setBackgroundColor = () => {
      let [r, g, b] = randomRgbColor();
      let hr = r.toString(16).padStart(2, '0');
      let hg = g.toString(16).padStart(2, '0');
      let hb = b.toString(16).padStart(2, '0');

      return '#' + hr + hg + hb;
    
};

export const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`;

export const Title = styled.section`
  display: block;
  font-size: 28px;
  font-family: fangsong;
  font-weight: 700;
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.white}
  width: 80%;
`;

export const StatList = styled.ul`
  display: flex;
  margin: auto;
  font-size: 20px;
  font-weight: 500;
  width: 80%;
`;

export const StatItem = styled.li`
  background-color: ${setBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: calc(100% / 5);
`;