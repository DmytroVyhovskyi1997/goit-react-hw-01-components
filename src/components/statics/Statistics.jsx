import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({
    title,
    stats,
}) =>  (
  <div>
<section className={css.statistics}>
{title && <h2 className={css.title}>{title}</h2>}

    <ul class={css.stat_list}>
    {stats.map(({id, label, percentage})=> (
      
    <li key={id} className={title ? css.statItem : css.statListItem}
    style={{
      backgroundColor: getRandomHexColor(),
    }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    
    </li>
    ))}
  </ul>
</section>
</div>
);


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }.isRequired)
  ).isRequired,
};