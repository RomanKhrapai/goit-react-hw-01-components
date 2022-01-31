import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'


export default function Statistics (
    {
        title,
         stats
    })
{
return (
<section className={s.statistics}>
  {title &&  <h2 className={s.title}>{title}</h2>}
  <ul className={s.statList}>
{
stats.map(item=>(
<li key={item.id} className={s.item}>
      <span  className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}</span>
    </li>
))
}
  </ul>
</section>
)
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
       } ),
      ),
  };
