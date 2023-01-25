import PropTypes from 'prop-types';
import React from 'react';
import {
  TransactionTable,
  TransactionHeader,
  TransactionRow,
  TransactionData,
} from './styled/TransactionsHistory';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
          <thead>
            <tr>
              <TransactionHeader>Type</TransactionHeader>
              <TransactionHeader>Amount</TransactionHeader>
              <TransactionHeader>Currency</TransactionHeader>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }, index) => {
              return (
                <TransactionRow key={id} tdNumber={index}>
                  <TransactionData> {type}</TransactionData>
                  <TransactionData> {amount}</TransactionData>
                  <TransactionData> {currency}</TransactionData>
                </TransactionRow>
              );
            })}
          </tbody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};