import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({
    title,
    stats,
}) =>  (
  <div>
<section class="statistics">
  <h2 class="title">{title}</h2>

    <ul class="stat-list">
    {stats.map(stat => (
    <li key={stat.id} class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
</div>
);


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.number
};