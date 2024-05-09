import { useState } from 'react';
import styles from './Accordian.module.css';
// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionitem}>
      <div className={styles.accordiontitle} onClick={() => setIsActive(!isActive)}>
        <div className='fw-bold'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={styles.accordioncontent}>{content}</div>}
    </div>
  );
};

export default Accordion;