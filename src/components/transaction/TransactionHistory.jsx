import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => (
<table  className={css.transaction}>
  <thead>
    <tr className={css.key}>
      <th className={css.value}>Type</th>
      <th className={css.value}>Amount</th>
      <th className={css.value}>Currency</th>
    </tr>
  </thead>

  <tbody className=''>
  {items.map(item => (
        <tr key={item.id} className={css.key}>
          <td className={css.item}>{item.type}</td>
          <td className={css.item}>{item.amount}</td>
          <td className={css.item}>{item.currency}</td>
        </tr>
      ))}
  </tbody>
</table>
)

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.number.isRequired,
      })
    ).isRequired,
  };