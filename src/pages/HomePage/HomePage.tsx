import React from 'react';
import CustomMap from 'components/Common/CustomMap';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Target Points</h1>
      <CustomMap />
    </div>
  );
};

export default HomePage;
