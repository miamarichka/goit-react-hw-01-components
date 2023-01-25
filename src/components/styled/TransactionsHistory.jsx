import styled from '@emotion/styled';

const isColored = props => {
  return props.tdNumber % 2 ? 'lightblue' : props.theme.colors.white;
};

export const TransactionTable = styled.table`
  width: 100%;
  margin: 20px;
  text-align: center;
  font-size: 20px;
  font-family: monospace;
  background-color: ${props => props.theme.colors.white};
`;

export const TransactionHeader = styled.th`
 padding-top: 40px;
`
export const TransactionRow = styled.tr`
  background-color: ${isColored};
`;

export const TransactionData = styled.td`
  padding: 12px;
`;
