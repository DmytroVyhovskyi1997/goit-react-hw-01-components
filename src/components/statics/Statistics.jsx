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
  <h2 className={css.title}>{title}</h2>

    <ul class={css.stat_list}>
    {stats.map(stat => (
      
    <li key={stat.id} className={css.item}
    style={{
      backgroundColor: getRandomHexColor(),
    }}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    
    </li>
    ))}
  </ul>
</section>
</div>
);


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};